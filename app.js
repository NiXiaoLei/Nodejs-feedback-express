var express = require('express');

var app = express();

var bodyParser = require('body-parser')

app.use('/public/',express.static('./public/'))

//配置使用 art-template 模板引擎
//第一个参数，表示，当渲染以 .art 结尾的文件的时候， 使用  art-template 模板引擎
//express-art-template 是专门用来兼容 Express  的
//依赖了art-template 所以必须装
app.engine('html',require('express-art-template'))

//Express 为 Response 相应对象提供了一个方法:render
//render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板名',{模板数据})
//第一个参数不能写路径，默认会去项目中的views 目录中查找该模板文件
//也就是说 EXpress有一个约定： 开发人员把所有的视图文件都放到VIEWS目录中



//修改默认的views 目录 
// app.set('views',render函数的默认路径)

//配置Body-parser 中间件(插件，专门用来解析表单Post请求体)
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())





var comments = [
    {
        name: '张三',
        message: '今天天气不错',
        dateTime: '2015-10-12'
    },
    {
        name: '张三',
        message: '今天天气不错',
        dateTime: '2015-10-12'
    },
    {
        name: '张三',
        message: '今天天气不错',
        dateTime: '2015-10-12'
    },
    {
        name: '张三',
        message: '今天天气不错',
        dateTime: '2015-10-12'
    }
]







app
.get('/',function(req, res){
    res.render('index.html',{
        comments:comments
    })
})
.get('/post',function(req,res){
    res.render('post.html')
})
// .get('/admin',function(req,res){
//     res.render('admin/index.html',{
//         title:'管理系统'
//     })
// })
.post('/post',function(req,res){
    var comment = req.body;
    comment.dateTime='2018-5-26 20:49'

    comments.unshift(comment)
    res.redirect('/')
})

app.listen(3000,function(){
    console.log('running...')
})