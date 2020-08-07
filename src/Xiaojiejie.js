import React, { Component, Fragment } from "react";
import XiaojiejieItem from "./XiaojiejieItem" 
import './style.css'
import axios from 'axios'
import Boss from './Boss'
//Fragment 空标签
class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "lyy",
      list: ["头部按摩", "精油推背"],
    };
  }

  async componentDidMount(){
      try{
        const res = await axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        console.log(res,'axios-res 获取数据成功')
      }catch(e){
          console.log(e,'错误信息')
      }
      
  }

//   /**
//    * 组件生命周期
//    * 1 componentWillMount
//    * 2 render
//    * 3 componentDidMount
//    * 组件的挂载过程 共三个节点控制
//    */
//   componentWillMount(){
//       console.log('componentWillMount ----- 组件将要挂载到页面的时刻')
//   }
//   componentDidMount(){
//     console.log('componentDidMount ----- 组件挂载完成时刻')
//   }

// /**
//    * 组件生命周期
//    * 4 componentWillUnmount
//    * 子 ---组件被删除前触发
//    */
//   componentWillUnmount(){
//     console.log('child-componentWillUnmount','子 ---组件被删除前触发')
//   }


//   /**
//    * 组件状态更新生命周期
//    * 1 shouldComponentUpdate  返回 true 会继续执行 render函数，false的话会直接停止更新，不再往下执行
//    * 2 componentWillUpdate
//    * 3 render
//    * 4 componentDidUpdate
//    * 共 四个生命周期阶段 控制节点
//    */
//   shouldComponentUpdate(){
//     console.log('1-shouldComponentUpdate ----- 组件更新前执行')
//     return true //true 会继续执行 render函数，false的话会直接停止更新，不再往下执行
//   }
//   componentWillUpdate(){
//     console.log('2-componentWillUpdate ----- should之后 组件更新前执行')
//   }

//   componentDidUpdate(){
//     console.log('4-componentDidUpdate ----- 组件更新完之后')
//   }



//   /**
//    * 子组件第一次存在于dom中，函数不会被执行
//    * 如果 已经存在于dom中 函数才会执行 
//    * componentWillReceiveProps
//    * 也就是当props发生更新时触发，第一次不触发
//    *  */ props 
//   componentWillReceiveProps(){
//     console.log('child-componentWillReceiveProps ----- 组件更新完之后')
//   }

  render() {
    // console.log('3-render ----- 组件挂载中')
    return (
      <Fragment> {/* 空标签 */}
          {/* 注释 */}
        <div>
            <label htmlFor="input">增加服务：</label>
          <input ref={(input) => this.input = input} id="input" className="input" value={this.state.inputValue} onChange={this.inputChange} />
          <button onClick={this.addList}>增加服务</button>
        </div>
        <ul ref={(ul) => this.ul = ul}>
          {this.state.list.map((item, index) => {
            return (
                // dangerouslySetInnerHTML 可以再标签内动态加入标签
                //   <li 
                //   dangerouslySetInnerHTML={{__html:item}} 
                //   onClick={() => this.deleteItem(index)} 
                //   key={index + "12"}>
                //   </li>
                <XiaojiejieItem deleteItem={this.deleteItem} content={item} index={index} key={index + '12'}></XiaojiejieItem>
            );
          })}
        </ul>
        <Boss></Boss>
      </Fragment>
    );
  }

  // 删除
  deleteItem = (index) => {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  };
  // 添加
  addList = (e) => {
    if (!this.state.inputValue) return;
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: "",
    });
   
  };

  // input change 事件
  inputChange = () => {
    this.setState({
      inputValue:this.input.value,
    });
  };
}

export default Xiaojiejie;
