import { useSelector, useDispatch}  from "react-redux"
import { addCount, delCount, asyncAddCount, asyncDelCount } from "../../features/counter/counterSlice"
import { fetchCountStep } from "../../request"
import "./index"
import { useEffect } from "react"
export default function Count(){
    const name = "react-hock+react-redux"
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

    // 直接在action里进行接口调用
    return (
        <div>
            <h2 className="title-sty">{count}</h2>
            
            <button className="btn-pri" onClick={()=> dispatch(addCount())}>加1</button>
            <button className="btn-pri" onClick={()=> dispatch(delCount())}>减1</button>
            <button className="btn-pri" onClick={()=> didManualStep("go")}>异步加</button>
        </div>
    )
}