import { defineConfig } from "vite";

export default defineConfig({
    mode: "development",
    optimizeDeps: {
        exclude: []
    },
    envPrefix: "QIUY_"// 配置解析 env 文件后在客户端展示的前缀
})