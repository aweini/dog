/**
 * Created by mahong on 17/6/9.
 */
import React, {Component} from 'react';

export default class Home extends Component{

    render(){
        let {homeImg} = this.props;
        return(
                <img className="ui fluid image" src={homeImg}/>
        )
    }
}