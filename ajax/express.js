//引入express

const express = require('express');

// 创建应用对象
const app = express();

// 创建路由规则
// req是请求报文 封装
// res是响应报文 封装
app.all('/express', (req, res) => {
    // 设置响应头  允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    res.send('hello Ajax');
});

// JSON 请求
app.post('/JSON-express', (req, res) => {
    // 设置响应头  允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    res.send('hello Ajax-json');
});

// IE缓存
app.all('/IE', (req, res) => {
    // 设置响应头  允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    res.send('hello Ajax - IE3');
});

//ajax请求超时
app.get('/timeout', (req, res) => {

    setTimeout(() => {
        // 设置响应体
        res.send('hello Ajax-timeout');
    }, 3000);

});

app.all('/jquery-sever', (req, res) => {
    // 设置响应头  允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    res.send('hello JQ-Ajax');
});

// axios 发送ajax请求
app.all('/axios', (req, res) => {
    // 设置响应头  允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    res.send('hello Ajax-axios');
});

// ajax 跨域  检测用户名
app.all('/sever', (req, res) => {
    const obj = {
        id: 1,
        name: '该用户已存在'
    }
    let x = JSON.stringify(obj);
    res.send(`test(${x})`)
});


// 监听端口 启动服务
app.listen(8000, () => {
    console.log('服务已启动,端口监听中......');
})