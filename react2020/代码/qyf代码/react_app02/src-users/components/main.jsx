import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Main extends Component{

  static propTypes = {
    searchName: PropTypes.string.isRequired
  }

  state = {
    initView: true,
    loading: false,
    users: null,
    errorMsg: null
  }

  // 当组件接收到新的属性时回调
  componentWillReceiveProps(newProps){ // 指定了新的searchName，需要请求
    const {searchName} = newProps
    // 更新状态
    this.setState({
      initView: false,
      loading: true
    })
    // 发送axios请求
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(rsp => {
        // 请求成功，得到响应数据
        const result = rsp.data
        // 箭头函数中我们希望react将大括号理解成小括号，此时需要在大括号外面加一个小括号，如下：
        const users = result.items.map(item => ({name: item.login, url: item.html_url, avatarUrl: item.avatarUrl}))
        // 更新状态（成功）
        this.setState({
          loading: false, users
        })
      })
      .catch(err => {
        // 更新状态（失败）
        this.setState({
          loading: false, errorMsg: err.message
        })
      })
  }


  render() {
    const {initView, loading, users, errorMsg} = this.state
    const {searchName} = this.props

    if(initView){
      return <h2>请输入关键词进行搜索: {searchName}</h2>
    }else if(loading){
      return <h2>正在请求中...</h2>
    }else if(errorMsg){
      return <h2>{errorMsg}</h2>
    }else {
      return (
        <div className="row">
          {
            users.map((user, index) => (
              <div className="card" key={index}>
                <a href={user.url} target="_blank">
                  <img src={user.avatarUrl} style={{width: "100px"}}/>
                </a>
                <p className="card-text">{user.name}</p>
              </div>
            ))
          }
        </div>
      )
    }
  }

}