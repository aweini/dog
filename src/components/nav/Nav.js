/**
 * Created by mahong on 17/6/7.
 */
import React, {Component} from 'react';

export default class Nav extends Component{
    render(){
        let {changeView} = this.props;
        // let changeView = this.props.changeView; //注意花括号
        //用回调函数的形式 执行父组建传过来的函数  changeView('home')直接写是执行啊
        return(
            <div className="ui menu">
                <div className="header item">Our Company </div>
                <a className="item" onClick={()=>changeView('home')}>Home </a>
                <a className="item" onClick={()=>{changeView('cards')}}>Cards </a>
                <a className="item">Locations </a>
            </div>
        )

    }
}