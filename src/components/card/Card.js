/**
 * Created by mahong on 17/6/7.
 */
import React ,{Component} from 'react';

//var img1 = require('images/kristy.png')

export default class Card extends Component{
    render(){
        return (
            <div className="ui card">
                <div className="image">
                    <img src="" />
                </div>
                <div className="content">
                    <a className="header">Kristy</a>
                    <div className="meta">
                        <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">Kristy is an art director living in New York. </div>
                </div>
                <div class="extra content">
                    <a><i className="user icon"></i> 22 Friends </a>
                </div>
            </div>
        )
    }
}