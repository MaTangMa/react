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
