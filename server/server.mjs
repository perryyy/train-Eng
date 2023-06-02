import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const app = express();

// 获取根目录的路径
const rootPath = dirname(dirname(fileURLToPath(import.meta.url)));

// 设置静态文件夹路径
const staticPath = path.join(rootPath, 'dist');
app.use('/train-Eng', express.static(staticPath));

app.get('/train-Eng', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});
const base = '/train-Eng'
// 启动服务器
const port = 8000;
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}${base}`);
});
