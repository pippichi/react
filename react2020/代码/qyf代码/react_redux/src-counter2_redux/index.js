import React from "react"
import ReactDOM from "react-dom"

import App from "./components/app";
import store from "./redux/store";

// // 生成一个store对象
// const store = createStore(counter) // 内部会第一次调用reducer函数得到初始state
// console.log(store)

function render() {
  ReactDOM.render(<App store={store}/>, document.querySelector("#root"))
}

// 初始化
render()

// 订阅监听（store中的状态变化了，就会自动调用进行重绘）
store.subscribe(render)