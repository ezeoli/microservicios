const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    changetOrigin: true,
  })
);
app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changetOrigin: true,}));