// api/proxy.js
import { createProxyMiddleware } from "http-proxy-middleware";

export default createProxyMiddleware({
  target: "https://api.timbu.cloud",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
});
