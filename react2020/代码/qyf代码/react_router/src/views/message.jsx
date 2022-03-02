import React, {Component} from 'react'

import {Route} from "react-router-dom"
import MessageDetail from "./message-detail";
import MyNavLink from "../components/my-nav-link";

export default class Message extends Component{

  state = {
    messages: [

    ]
  }

  componentDidMount() {
    setTimeout(()=> {
      const messages = [
        {id: 1, title: "message001"},
        {id: 3, title: "message003"},
        {id: 4, title: "message004"},
        {id: 6, title: "message006"},
      ]
      this.setState({messages})
    }, 1000)
  }

  showDetail = (id) => {
    // BOM内置的
    this.props.history.push(`/home/message/messageDetail/${id}`)
  }

  showDetail2 = (id) => {
    this.props.history.replace(`/home/message/messageDetail/${id}`)
  }

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  reqPage = () => {
    // 通过js进行页面跳转
    window.location = 'https://www.bilibili.com'
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map((m, index) => (
            <li key={index}>
              {/*<a href={`/home/message/messageDetail/${m.id}`}>{m.title}</a>*/}
              <MyNavLink to={`/home/message/messageDetail/${m.id}`}>{m.title}</MyNavLink>
              {/*这里onClick默认传递的是event这个参数，但是在这里我们不需要event，需要的是id*/}
              {/*&nbsp;&nbsp; <button onClick={this.showDetail}>查看</button>*/}
              {/*所以需要像下面这样写：*/}
              &nbsp;&nbsp; <button onClick={() => {this.showDetail(m.id)}}>push()查看</button>
              &nbsp;&nbsp; <button onClick={() => {this.showDetail2(m.id)}}>replace()查看</button>
            </li>
          ))}
        </ul>
        <p onClick={this.back}>回退</p>
        <p onClick={this.forward}>前进</p>
        <p onClick={this.reqPage}>页面跳转</p>
        <Route path="/home/message/messageDetail/:id" component={MessageDetail}/>
      </div>
    )
  }

}