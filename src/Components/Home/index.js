// 先来个class组件的写法
import React from "react";
import "./index.css"
export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: "主页",
            count: 0
        }
    }
    componentDidMount(){
        document.title = this.state.title
    }

    componentDidUpdate(){
        document.title = this.state.title
    }

    toggleTitle(){
        this.setState({
            title: `标题${this.state.count ++ }` 
        })
    }

    render(){
        return (
            <div>
                <h2 className="title-sty">{this.state.title}</h2>
                <button className="btn-pri" onClick={this.toggleTitle.bind(this)}>改变标题</button>
            </div>
        )
    }
}