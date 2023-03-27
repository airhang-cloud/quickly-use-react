import { useSelector, useDispatch}  from "react-redux"
import { addCount, delCount, asyncAddCount, asyncDelCount } from "../../features/counter/counterSlice"
import { fetchCountStep } from "../../request"
import "./index"
import { useEffect, useState } from "react"

// useState 第二个参数 作为可选参数，她只会在第一次渲染的时候进行调用，仅调用一次，后续更新都不会触发，且可return一个变量初始值
export default function Count(){
    const name = "react-hock+react-redux"
    const [ counter, setCounter ] = useState(() => {
        console.log("第二个参数");
        return 12
    })
    // 获取store里定义的 count属性
    const count = useSelector((state) => state.counter.value)
    // 获取store里定义的 action方法
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log("count", count);
    })

    // 从模拟接口请求方法中获取 type 1
    const didManualStep = async function (str){
        console.log("str",str);
        const { data } = await fetchCountStep()
        console.log("res", data);
        dispatch(asyncAddCount(data))
    }
   
    const stateClick = function(){
        setCounter(counter * 2)
    }

    // 直接在action里进行接口调用
    return (
        <div>
            <h2 className="title-sty">{count}</h2>
            <h3 className="title-sty">{counter}</h3>
            <button className="btn-pri" onClick={()=> dispatch(addCount())}>加1</button>
            <button className="btn-pri" onClick={()=> dispatch(delCount())}>减1</button>
            <button className="btn-pri" onClick={()=> didManualStep("go")}>异步加</button>
            <button className="btn-pri" onClick={()=> stateClick()}>测试useState第二个参数</button>
        </div>
    )
}