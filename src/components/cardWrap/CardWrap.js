/**
 * Created by mahong on 17/6/7.
 */
import React ,{Component} from 'react';
import Card from "card/Card";

export default class CardWrap extends Component{
    render(){
        let data = this.props.data;
        let cards = data.map((ele, i) => <Card key={i} {...ele}/>);
        return(
            <div className="ui cards">
                {cards}
            </div>
        )
    }
}