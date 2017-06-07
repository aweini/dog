/**
 * Created by mahong on 17/6/7.
 */
import React, {Component} from 'react';

export default class Nav extends Component{
    render(){
        return(
            <div className="ui three item menu">
                <a className="active item">Editorials</a>
                <a className="item">Reviews</a>
                <a className="item">Upcoming Events</a>
            </div>
        )

    }
}