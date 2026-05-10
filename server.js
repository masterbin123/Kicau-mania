const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use("/", createProxyMiddleware({
  target: "https://167.71.199.11/",
  changeOrigin: true,
  secure: false
}));
app.listen(3000, () => {
  console.log("Mirror berjalan di https://167.71.199.11/");
});
