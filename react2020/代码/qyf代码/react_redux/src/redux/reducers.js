/*
* 包含n和reducer函数（根据老的state和action返回一个新的state）
* */
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from "./action-types";
import {combineReducers} from "redux"

const initComments = []

function comments(state=initComments, action) {
  switch (action.type){
    case ADD_COMMENT:
      return [action.data, ...state]
    case DELETE_COMMENT:
      return state.filter((comment, index) => index !== action.data)
    case RECEIVE_COMMENTS:
      return action.data
    default:
      return state
  }
}

function counter(state = 0, action) {
  console.log("state()", state, action)
  switch (action.type) {
    case "INCREMENT":
      return state + action.data
    case "DECREMENT":
      return state - action.data
    default:
      return state
  }
}

export default combineReducers({
  comments,  // 指定reducer对应的属性
  counter
})

// redux向外暴露的state是个什么结构
// {counter: 2, comments: []}