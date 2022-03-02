import {createStore, applyMiddleware} from "redux";
import {counter} from "./reducers";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

// 生成一个store对象
const store = createStore(
  counter,
  composeWithDevTools(applyMiddleware(thunk)) // 应用上异步中间件
)// 内部会第一次调用reducer函数得到初始state
console.log(store)

export default store