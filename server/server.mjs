import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const app = express();

// 获取根目录的路径
const rootPath = dirname(dirname(fileURLToPath(import.meta.url)));

// 设置静态文件夹路径
const staticPath = path.join(rootPath, 'dist');
app.use(express.static(staticPath));

// 启动服务器
const port = 3000;
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}/`);
});
