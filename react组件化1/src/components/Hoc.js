import React, { Component } from "react";

// 高阶组件：接收一个组件作为参数，返回一个更高级的组件，甚至可以重新定义它的生命周期
const withName = Comp => {
  // 甚至可以重写组件生命周期
  class NewComponent extends Component {
    componentDidMount() {
      console.log("do something，高阶组件重写组件生命周期");
    }
    render() {
      return <Comp {...this.props} name="高阶组件试用介绍" />;
    }
  }

  // 假设通过某种特殊手段获取了本节课名字
  return NewComponent;
};

const withLog = Comp => {
  console.log(Comp.name + "渲染了 from withLog组件");
  return props => <Comp {...props} />;
};

@withLog
@withName
@withLog
// 装饰器必须使用在class上，注解的作用就是将对应的class经过装饰之后返回一个新的class
class Kaikeba extends Component {
  render() {
    return (
      <div>
        {this.props.stage} - {this.props.name}
      </div>
    );
  }
}
// 无装饰器导出，链式调用很麻烦，所以我们要用装饰器注解来优化写法
// export default withName(Kaikeba);   
// export default withLog(withName(Kaikeba)); 

export default Kaikeba;
