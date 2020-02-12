import React, { Component, PureComponent } from "react";

// 展示组件：负责根据props显示信息

// class Comment extends Component {
  // 方式1: 生命周期中shouldComponentUpdate时，通过数据对比判断是否需要重新渲染组件，但是这个要自己去对比数据，数据复杂的时候非常复杂
  // shouldComponentUpdate(nextProps) {
  //   console.log(nextProps, this.props)
  //   if (
  //     nextProps.body === this.props.body &&
  //     nextProps.author === this.props.author
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }

// 方式2: PureComponent 纯组件对组件的shouldComponentUpdate进行了优化,减少组件不变时候的重新渲染（省的我们自己去对比数据了）
// class Comment extends PureComponent {
//   render() {
//     console.log("render");
//     return (
//       <div>
//         <p>{this.props.body}</p>
//         <p>------{this.props.author}</p>
//       </div>
//     );
//   }
// }

// 方式3: React.memo高阶组件实现
const Comment = React.memo(({ body, author }) => {
  console.log("render");
  return (
    <div>
      <p>{body}</p>
      <p>------{author}</p>
    </div>
  );
});

// 容器组件：负责数据获取
export default class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        comments: [
          { body: "react is very good", author: "facebook" },
          { body: "vue is very good", author: "youyuxi" }
        ]
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} {...c} />
        ))}
      </div>
    );
  }
}
