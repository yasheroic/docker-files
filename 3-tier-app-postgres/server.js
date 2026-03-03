const express = require("express");
const { Pool } = require("pg");
const redis = require("redis");

const app = express();
app.use(express.json());

// ==============================
// PostgreSQL Connection
// ==============================

const db = new Pool({
  host: process.env.POSTGRES_HOST || "localhost",
  user: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  database: process.env.POSTGRES_DB || "testdb",
  port: 5432,
});

// ==============================
// Redis Connection
// ==============================

const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST || "localhost"}:6379`,
});

redisClient.on("error", (err) =>
  console.error("Redis Error:", err)
);

// ==============================
// Init Function
// ==============================

async function init() {
  try {
    await redisClient.connect();

    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255)
      )
    `);

    console.log("✅ Connected to PostgreSQL & Redis");
  } catch (err) {
    console.error("Initialization error:", err);
  }
}

init();

// ==============================
// Routes
// ==============================

// Health check
app.get("/", (req, res) => {
  res.send("Postgres 3-Tier App Running 🚀");
});

// Insert user
app.post("/users", async (req, res) => {
  try {
    const { name } = req.body;

    await db.query("INSERT INTO users (name) VALUES ($1)", [name]);

    // Clear cache
    await redisClient.del("users");

    res.send("User added");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error inserting user");
  }
});

// Get users (with cache)
app.get("/users", async (req, res) => {
  try {
    const cached = await redisClient.get("users");

    if (cached) {
      return res.json({
        source: "redis",
        data: JSON.parse(cached),
      });
    }

    const result = await db.query("SELECT * FROM users");
    const rows = result.rows;

    await redisClient.set("users", JSON.stringify(rows));

    res.json({
      source: "postgres",
      data: rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users");
  }
});

// ==============================
// Start Server
// ==============================

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});