import React, { Component } from 'react';
import PropTypes from "prop-types"
class XioajiejieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    /**
     * 利用组件更新生命周期 进行性能优化,
     * 避免父组件的数据变动影响到子组件的render更新 
     * @param {*} nextProps 即将到来的props
     * @param {*} nextState 即将到来的state
     */
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }

    render() { 
        console.log("Children-render-----------------------------------")
        return ( 
        <li onClick={this.deleteMe}>
            {this.props.avName}为你服务 -{this.props.content}
            </li> 
            );
    }

    deleteMe = ()=>{
        this.props.deleteItem(this.props.index)
        console.log(this.props.index)
    }
}



// react prop类型校验 防止业务逻辑错误引起不必要的麻烦
XioajiejieItem.propTypes={
    index:PropTypes.number,
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    avName:PropTypes.string.isRequired
}

// react prop默认值设置
XioajiejieItem.defaultProps={
    avName:'aaa'
}
 
export default XioajiejieItem;
    