/**
 * Created by mahong on 17/6/6.
 */
const webpack = require('webpack');
const path = require("path");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require('./webpack.config');

//const bs = require("browser-sync").create();
//webpack打包的时候首先连接到这个服务器,然后等待文件被编译
config.entry.unshift('webpack-hot-middleware/client?reload=true');

let app = new (require('express'))();
let port = "8088";
let compiler = webpack(config);

//启动node服务器后会执行一次webpack打包,放到内存里,并不会放到目标文件夹,浏览器访问node时,node从内存里读取内容返回给前端
//{publicPath: '/assets/'} 必须写 这是放在内存中的位置,和webpack.config中生成文件存放位置无关
//webpackDevMiddleware 和webpack结合 把资源进行打包,把打包好的东西放到内存,替换旧的资源  生产环境用express.static()管理静态文件
app.use(webpackDevMiddleware(compiler, {publicPath: '/assets/'}));

app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res)=> res.sendFile(path.resolve(__dirname, 'src/index.html')) )

app.listen(port);