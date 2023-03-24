//  react-hock 重构Home组件
import "./index.css"
import { useEffect, useState } from "react"
export function HomeHock(props){
    const [title,seTitle] = useState(1)
    function toggleTitle(){
            seTitle(title+1)
    }
    useEffect(()=>{
        //  componentDidMounted componentDidUpdated
       document.title = `标题${title}`
    })

    return (
        <div>
            <h2 className="title-sty">标题{title}</h2>
            <button className="btn-pri" onClick={toggleTitle}>改变标题</button>
            {
                props.list?.map((el,index) => {
                    return (
                        <div key={index}>数据--{el}</div>
                    )
                })
            }
        </div>
    )
}