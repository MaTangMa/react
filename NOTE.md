### 目录

public

src
index.js 入口文件
react 是核心库
registerServiceWorker.js 加快 react 运行速度的，现在这里没有
Reactdom 提供 DOM 相关功能
引入 app.js 根组件
index.css 公共 css 可以删除，以后在组件中写
app.js 根组件
app.text.js 测试文件

#### src 新建文件

    components 组件文件夹
    assets 静态资源

##### jsx 语法

```
render() {
    return (
        混合代码
    )
}
如果一行
render () {
    return <div></div>
}
```

- 绑定属性语法 react 关键词冲突
  class 要用 className
  lable 的 for 属性 用 htmlFor
  input 标签中的 value 必须由 onChange 事件管理否则会报警告
  非约束性组件用 defaultValue，是用户输入的内容，与 react 无关，不由 react 管理
  约束性组件用 value，不是用户输入的值，是由 onChange 管理的，如果要实现双向绑定必须用此方法

- 父子组件通信
  父组件传值给子组件

1. 在调用子组件的时候定义一个属性 <Header msg='首页'></Header>
2. 子组件里面 this.props.msg

- 说明：父组件不仅可以给子组件传值，还可以给子组件传方法,以及把整个父组件传给子组件,可以让子组件给父组件传值 \*

父组件主动获取子组件的数据

1. 调用子组件的时候指定 ref 的值

```
<Header ref='header'></Header>
```

2. 通过 this.refs.header 获取整个子组件实例 (dom（组件）加载完成以后获取 )
   父组件给子组件传值：
   defaultProps:父子组件传值中，如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用 defaultProps 定义的默认值
   propTypes：验证父组件传值的类型
   1、引入 import PropTypes from 'prop-types';
   2、类.propTypes = {
   name: PropTypes.string
   };
   都是定义在子组件里面

#### ajax 请求

1. axios 不支持 jsonp
   npm i axios --save
   import axios from 'axios'

```
 var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';   //接口后台允许了跨域
        axios.get(api)
        .then((response)=> {
            console.log(response.data.result);
            //用到this要注意this指向
            this.setState({
                list:response.data.result
            })
        })
        .catch(function (error) {
            console.log(error);
        });
```

2. fetchJsonp
   npm i fetch-jsonp --save
   import fetchJsonp from 'fetch-jsonp';

```
fetchJsonp('/users.jsonp')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```

### 路由传参

- exact 对 path 严格匹配

* route 传参

```
<Route path="/newsDetail/:id" component={NewsDetail} />

<Link to={`/newsDetail/${value.id}`}>{value.content}</Link>
// 获取
this.props.match.params
```

- url ？传参

```
<Route path="/newsDetail" component={NewsDetail} />

<Link to={`/newsDetail?id=${value.id}`}>{value.content}</Link>
//   获取 url ? 参数
//   npm i url --save
let params = url.parse(this.props.location.search, true).query
```

### antdesign

1. 安装
   npm i antd --save / yarn add antd / cnpm i antd --save
2. 在 index.css 引入
   @import '~antd/dist/antd.css'
3. 按需引入

- 安装 react-app-rewired
  yarn add react-app-rewired / cnpm install react-app-rewired --save
- 修改 package.json
  react-scripts 需改为 react-app-rewired

```
"scripts": {
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test --env=jsdom",
"eject": "react-app-rewired eject"
}
```

- 根目录新建 config-overrides.js
  写入

```
module.exports = function override(config, env) {
 		 // do stuff with the webpack config...
 	 return config;
	};
```

- 安装 babel-plugin-import babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件
  yarn add babel-plugin-import / cnpm install babel-plugin-import --save
- 修改 config-overrides.js

```
	const { injectBabelPlugin } = require('react-app-rewired');

  	module.exports = function override(config, env) {
   	 config = injectBabelPlugin(
     		   ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        	   config,
  	  );
   	 return config;
 	 };
```

- 然后移除前面在 src/App.css 里全量添加的 @import '~antd/dist/antd.css'; 直接引入组件使用就会有对应的 css
