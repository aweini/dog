/**
 * Created by mahong on 17/6/7.
 */
import React, {Component} from 'react';

export default class Nav extends Component{
    render(){
        return(
            <div className="ui menu">
                <div className="header item">Our Company </div>
                <a className="item">About Us </a>
                <a className="item">Jobs </a>
                <a className="item">Locations </a>
            </div>
        )

    }
}