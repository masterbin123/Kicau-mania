const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { createServer } = require("@vercel/node");

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://167.71.199.11/",
    changeOrigin: true,
    secure: false,
  })
);

// Export sebagai handler untuk serverless
module.exports = app;

