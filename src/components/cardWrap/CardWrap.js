/**
 * Created by mahong on 17/6/7.
 */
import React ,{Component} from 'react';
import Card from "card/Card";

export default class CardWrap extends Component{
    render(){
        return(
            <div className="ui cards">
                <Card/>
                <Card/>
            </div>
        )
    }
}