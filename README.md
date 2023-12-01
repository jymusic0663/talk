# Talk

## 一个免注册、免下载，免费的、点对点加密的、开源的视频通话网站

Talk是使用WebRTC构建的，因此您所有的视频、音频和文本聊天都是点对点的。使用WebRTC网格实现群组视频通话。因此，通话质量与通话人数成反比。通话质量一般在6到8个人比较好。

---

### 中文版更新内容

- 改为中文界面
- 房间名支持中文/emoji
- 结束通话后 1.5 秒自动跳转回首页
- 结束通话的评价反馈增加显示逻辑
- 未部署ssl证书访问提示及返回主页

### 构建要求:

- Node.js 不低于8.x版本
- NPM

### 本地构建

[Fork仓库](https://github.com/vasanthv/talk/fork) 然后拉取到本地:

```bash
git clone https://github.com/<your_name>/talk.git
```

`cd talk` 然后安装依赖包：

```bash
npm install
```

npm运行

```bash
npm start
```

默认运行在 3000端口上，浏览器打开：https://localhost:3000 

## docker-compose

支持 docker 运行，执行 `docker compose up` 即可启动容器

### LICENSE

<a href="https://github.com/vasanthv/talk/blob/master/LICENSE">MIT License</a>
