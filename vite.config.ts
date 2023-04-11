// 关于开发生成环境配置的处理
import { defineConfig, loadEnv } from "vite"
import viteBaseConfig from "./viteBaseConfig"
import viteDevConfig from "./viteDevConfig"
import viteProdConfig from "./vitePordConfig"

const envResolver = {
  "build": () => ({ ...viteBaseConfig, ...viteProdConfig }),
  "serve": () => ({ ...viteBaseConfig, ...viteDevConfig })
}
export default defineConfig(({ command, mode }) => {
  /*
  * process.cwd()：当前文件所在目录
  * 第三个参数默认读取 .env 文件的前缀也就是 .env
  * 整体来说，
  * 一  .env的后缀 
  * 二: 文件目录 
  * 三: 默认的.env
  * 默认的 .env 不带后缀的，也会被加载进来(公用环境)
  */
  const env = loadEnv(mode, process.cwd(), "");
  return envResolver[command]();
})