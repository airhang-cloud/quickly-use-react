import { createSlice } from "@reduxjs/toolkit"
import { fetchDelCountStep } from "../../request"
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        addCount: (state) => {
            state.value +=1
        },
        delCount: (state) => {
            state.value -=1
        },
        asyncAddCount: (state,actions) => {
            console.log("actions", actions);
            state.value += actions.payload
        },
        asyncDelCount: async (state) => {
            const { data } = await fetchDelCountStep()
            console.log("异步", data);
            state.value += data
        }
    }
})

// 将action方法暴露外面使用
export const { addCount, delCount, asyncAddCount, asyncDelCount } = counterSlice.actions

export default counterSlice.reducer