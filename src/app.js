/**
 * Created by mahong on 17/6/6.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import es6写法引入模块 require commonjs写法 都可以
//var ReactDOM = require("react-dom");
import Nav from "nav/Nav";
import CardWrap from 'cardWrap/CardWrap';

require('semantic-ui/dist/semantic.css');
require('style/main.css');



ReactDOM.render(
    <div className="ui container">
        <div className=""></div>
        <Nav/>
        <CardWrap></CardWrap>
    </div>,
    document.getElementById('wrap')
)

if(module.hot){
    module.hot.accept();
}