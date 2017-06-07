/**
 * Created by mahong on 17/6/7.
 */
import React ,{Component} from 'react';
import Wrap from "cardWrap/CardWrap";

export default class CardWrap extends Component{
    render(){
        return(
            <div>
                <Wrap/>
                <Wrap/>
            </div>
        )
    }
}