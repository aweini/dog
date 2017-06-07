/**
 * Created by mahong on 17/6/7.
 */
import React ,{Component} from 'react';

//这3种写法都可以
//var img1 = require('../../common/images/kristy.png')//模块相对的路径,找到后编译后路径自会改变
//var img1 = require('images/kristy.png');
import  img1 from 'images/kristy.png'

export default class Card extends Component{
    render(){
        return (
            <div className="ui card">
                <div className="image">
                    <img src={img1} />
                </div>
                <div className="content">
                    <a className="header">Kristy</a>
                    <div className="meta">
                        <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">Kristy is an art director living in New York. </div>
                </div>
                <div className="extra content">
                    <a><i className="user icon"></i> 22 Friends </a>
                </div>
            </div>
        )
    }
}