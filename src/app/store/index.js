import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../../features/counter/counterSlice'
import titleReducer from '../../features/toggleTitle/titleSlice'
//  state 只读变量  action中的方法才可以操作  reducer 进行关联 state和action

export default configureStore({
    reducer: {
       counter: counterReducer,
       title: titleReducer
    }
})