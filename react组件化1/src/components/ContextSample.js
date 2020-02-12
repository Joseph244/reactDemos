// 组件传参demo：多层组件传餐
import React, { Component } from "react";

// 1. 创建上下文
const Context = React.createContext();

const store = {
  name: "开课吧",
  sayHi() {
    console.log(this.name);
  }
};

const withProvider = Comp => props => (
  <Context.Provider value={store}>
    <Comp {...props} />
  </Context.Provider>
);

const withConsumer = Comp => props => (
  <Context.Consumer>
    {/* 必须内嵌一个函数 */}
    {value => <Comp {...props} value={value} />}
  </Context.Consumer>
);

@withConsumer
class Inner extends Component {
  render() {
    return <div onClick={() => this.props.value.sayHi()}>{this.props.value.name}</div>;
  }
}

@withProvider
class ContextSample extends Component {
  render() {
    return <div><Inner></Inner></div>;
  }
}

export default ContextSample


// 未使用装饰器的写法
// export default class ContextSample extends Component{
//   render(){
//     return (
  // Context.Provider将外层组件数据传入
//       <Context.Provider value={store}>
//         <div>
//           {/* 内部组件获取外层传入数据 */}
//           <Context.Consumer>
//             {/* 必须内嵌一个函数 */}
//             {value => <div onClick={() => value.sayHi()}>{value.name}</div>}
//           </Context.Consumer>
//         </div>
//       </Context.Provider>
//     )
//   }
// }