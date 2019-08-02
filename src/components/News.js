import React from 'react'

// 
class News extends React.Component {
    constructor (props) {
        super (props) // props用于父子组件传值，也是标准
        this.state = {
            
        }
    }
    render () {
        return (
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}
export default News