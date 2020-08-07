import React, { Component, Fragment } from 'react';
import { CSSTransition } from "react-transition-group"
import './style.css'
// - Transition
// -cssTRransition
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:true
         }
    }
    render() { 
        return ( 
            <Fragment>
                <CSSTransition unmountOnExit in={this.state.isShow} timeout={2000} classNames="boss-text">
                    <div>big-Boss</div>
                </CSSTransition>   
                <div>
                    {/* <div className={this.state.isShow?'show':'hide'}>big-Boss</div> */}
                    <div><button onClick={this.toggle}>召唤Boss</button></div>
                </div>
            </Fragment>
       
         );
    }

    toggle=() => {
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
 
export default Boss;