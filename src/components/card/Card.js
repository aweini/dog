/**
 * Created by mahong on 17/6/7.
 */
import React ,{Component} from 'react';//React 是 react 默认输出的模块不用{}
import PropTypes from 'prop-types'
//这3种写法都可以
//var img1 = require('../../common/images/kristy.png')//模块相对的路径,找到后编译后路径自会改变
//var img1 = require('images/kristy.png');
//import  img1 from 'images/kristy.png'

let propTypes = {
    imageSrc : PropTypes.string,
    name: PropTypes.string,
    meta: PropTypes.string,
    joinDate: PropTypes.string,
    desc: PropTypes.string,
    friendNum: PropTypes.number
};

let contextTypes = {
    et: PropTypes.string
}
export default class Card extends Component{
    //初始化组建的内部状态,需要再类的constructor里进行
    constructor(){
        super();
        this.state = {
            isHeart : false
        };
        this.clickHeart = this.clickHeart.bind(this);//改变clickHeart函数内部this指向

    }
    clickHeart(){
        let {isHeart} = this.state;
        isHeart = !isHeart;
        this.setState({isHeart});
    };

    render(){
        let { imageSrc, name, meta, joinDate, desc, friendNum } = this.props;
        let {et} = this.context;
        let isHeart = (this.state.isHeart==true?'':'empty');
        return (
            <div className="card">
                <div className="image">
                    <img src={imageSrc} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <a>{meta}</a>
                    </div>
                    <div className="description">{desc}</div>
                </div>
                <div className="extra content">
                    <span className="right floated">{`${et} in ${joinDate}`}</span>
                    <span><i className={`${isHeart} heart icon`} onClick={this.clickHeart}></i>{`${friendNum} Friends`}</span>

                </div>
            </div>
        )
    }
}

Card.propTypes = propTypes;
Card.contextTypes = contextTypes;