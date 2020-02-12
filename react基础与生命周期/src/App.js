import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";

// 函数型组件（自定义组件要首字母大写），传递props
function Welcome1(props) {
  return <div>Hello, {props.name}</div>;  // 调用的时候使用name="tom"传值
}

export default class App extends Component {
  // 1.当需要状态时，需要构造函数
  constructor(props) {
    super(props);

    // 2.初始化状态
    this.state = {
      count: 0,
      date: new Date()
    };
  }
  // react生命周期函数
  componentDidMount() {
    this.timer = setInterval(() => {
      // 3.更新状态
      this.setState({
        date: new Date(),
        count: this.state.count + 1
      });

      //   注意1：不能直接改状态
      // this.state.date = new Date();//错误
    }, 1000);
    
    // 注意2：setState()异步的
    this.setState((prevState, prevProps)=>({
        count: prevState.count + 1
    }), () => {
        console.log(this.state.count);
    });
    // console.log(this.state.count);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  // 由于和render函数在同一层，所以html 代码中要使用this.formatName访问
  formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  render() {
    const name = "jerry";
    // jsx本身也是表达式，此处就可以增加if-else等条件逻辑
    const jsx = <p>hello,同学们</p>;
    return (
      <div>
        App组件
        {/* 表达式 */}
        <h1>{name}</h1>
        <p>{this.formatName({ firstName: "tom", lastName: "jerry" })}</p>
        {/* 属性，class是js的关键字，所以此处react规定了使用className代替 */}
        <img src={logo} style={{ width: "100px" }} className="img" />
        {/* jsx也是表达式 */}
        {jsx}
        {/* 组件属性传值: 传入属性是只读的 */}
        <Welcome1 name="tom" />
        {/* 使用状态 */}
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
