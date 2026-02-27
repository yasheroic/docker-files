const express = require("express");
const mysql = require("mysql2/promise");
const redis = require("redis");

const app = express();
app.use(express.json());

/*
  IMPORTANT:
  In Docker Compose you will use service names as hostnames.
  Example:
    mysql
    redis
*/

// MySQL connection
const db = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "testdb",
});

// Redis connection
const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST || "localhost"}:6379`,
});

redisClient.on("error", (err) => console.log("Redis Error:", err));

async function init() {
  await redisClient.connect();

  // Create table if not exists
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255)
    )
  `);

  console.log("✅ Connected to MySQL & Redis");
}

init();

/*
  ROUTES
*/

// Health check
app.get("/", (req, res) => {
  res.send("Three Tier App Running 🚀");
});

// Insert user
app.post("/users", async (req, res) => {
  const { name } = req.body;

  await db.query("INSERT INTO users (name) VALUES (?)", [name]);

  // Clear cache
  await redisClient.del("users");

  res.send("User added");
});

// Get users (with Redis cache)
app.get("/users", async (req, res) => {
  const cached = await redisClient.get("users");

  if (cached) {
    return res.json({
      source: "redis",
      data: JSON.parse(cached),
    });
  }

  const [rows] = await db.query("SELECT * FROM users");

  await redisClient.set("users", JSON.stringify(rows));

  res.json({
    source: "mysql",
    data: rows,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});