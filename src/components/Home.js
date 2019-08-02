import React, { Component } from 'react';
import { deflate } from 'zlib';

class Home extends Component {

    // 构造函数
    constructor () {
        super();
        // 定义数据
        this.state = {
            name: 'Mac'
        }
    }
    // 模板
    render () {
        // 如果return只有一行代码可以不写（）
        return (
            <div>
                <h2>hello react</h2>
                <p>I'm home {this.state.name}</p>
                
            </div>
        )
    }
}

// 导出
export default Home