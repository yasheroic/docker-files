const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Dockerized Node App</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #667eea, #764ba2);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        color: white;
      }

      .card {
        background: rgba(255, 255, 255, 0.1);
        padding: 40px;
        border-radius: 16px;
        text-align: center;
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        width: 400px;
      }

      h1 {
        margin-bottom: 10px;
      }

      p {
        margin: 8px 0;
        font-size: 16px;
      }

      .badge {
        margin-top: 20px;
        padding: 8px 16px;
        background: #00ffcc;
        color: #000;
        border-radius: 20px;
        display: inline-block;
        font-weight: bold;
      }

      footer {
        margin-top: 20px;
        font-size: 12px;
        opacity: 0.8;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>🚀 Node.js Docker App</h1>
      <p><strong>Hostname:</strong> ${os.hostname()}</p>
      <p><strong>Server Time:</strong> ${new Date().toLocaleString()}</p>
      <div class="badge">Running inside Docker</div>
      <footer>Built with ❤️ using Express</footer>
    </div>
  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`\nServer running on port ${PORT}`);
});