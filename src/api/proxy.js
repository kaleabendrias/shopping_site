import { createProxyMiddleware } from "http-proxy-middleware";

const proxy = createProxyMiddleware({
  target: "https://api.timbu.cloud",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
});

export default function handler(req, res) {
  proxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result;
    }
  });
}
