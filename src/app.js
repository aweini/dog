/**
 * Created by mahong on 17/6/6.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
//import es6写法引入模块 require commonjs写法 都可以
//var ReactDOM = require("react-dom");
import Nav from "nav/Nav";
import CardWrap from 'cardWrap/CardWrap';

require('semantic-ui/dist/semantic.css');
require('style/main.css');

let data = [
    {
        imageSrc: require('images/kristy.png'),
        name: 'kristy',
        meta: "friend",
        joinDate: '2013',
        des: 'Kristy is an art director living in New York',
        friendNum: 50
    },
    {
        imageSrc: require('images/matthew.png'),
        name: 'matthew',
        meta: "classmate",
        joinDate: '2012',
        des: 'Matthew is an programmer living in New York',
        friendNum: 100
    },
    {
        imageSrc: require('images/elyse.png'),
        name: 'elyse',
        meta: 'colleague',
        joinDate: '2010',
        des: 'elyse is an artist living in New York',
        friendNum: 100
    },
    {
        imageSrc: require('images/elliot.jpg'),
        name: 'elliot',
        meta: 'stranger',
        joinDate: '2000',
        des: 'elliot is an officer living in London',
        friendNum: 800
    },
    {
        imageSrc: require('images/jenny.jpg'),
        name: 'jenny',
        meta: 'leader',
        joinDate: '2000',
        des: 'jenny is an teacher living in London',
        friendNum: 700
    }
];

// context 跨组建传递数据 破坏组建的封装性,难以复用,使数据流向不再清晰,熟悉redux再使用
class App extends Component{
    getChildContext(){ //PropTypes提供 给所有子类实例提供context {et: 'Promotion'}
        return {
            et: "Promotion"
        }
    }

    render(){
        let {data} = this.props;
        return (
            <div className="ui container">
                <div className=""></div>
                <Nav/>
                <CardWrap data={data}></CardWrap>
            </div>
        )
    }
}

App.childContextTypes = {
    et: PropTypes.string
}

ReactDOM.render(
    <App data={data}/>,
    document.getElementById('wrap')
)

if(module.hot){
    module.hot.accept();
}