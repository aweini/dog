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
    constructor(props){
        super(props);
        //props内的值不可以更改,是只读的
        //先setState更新相应的属性,会把setState的值合并到state,合并是浅层合并,会把属性的整个值都合并到属性即使他是一个对象,这样就更新了state
        //setState可能是异步更新的,批量更新的, setState后state不是立刻更新,而是把setState放到一个队列,到时候一起更新

        this.state = {
            isHeart : false,
            year : parseInt(this.props.joinDate)
        };
        this.clickHeart = this.clickHeart.bind(this);//改变clickHeart函数内部this指向
        this.addYear = this.addYear.bind(this);

    }
    clickHeart(event){
        let {isHeart} = this.state;
        isHeart = !isHeart;
        this.setState({isHeart});
        console.log(event);//react封装的event
        console.log(event.nativeEvent);//原生event
        console.log(event.target);//原生element
    };


    addYear(){
        let {year}  = this.state;
        this.setState({
            year: year+1
        });//

        //this.setState({
        //    year: this.state.year+1 //由于异步,这样this.state.year已经不是原来的year
        //});
        this.clickHeart();//两次setState只会引起一次render()
        console.log(this.state.year);//打印的数据是setState之前的,setState是异步的还没有执行

        //如果上面的放在一个异步函数如settimeout执行就不再是异步的
    };

    render(){
        let { imageSrc, name, meta, joinDate, desc, friendNum } = this.props;
        let {et} = this.context;
        let isHeart = (this.state.isHeart==true?'':'empty');
        let {year} = this.state;
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
                    <span className="right floated" onClick={this.addYear}>{`${et} in ${year}`}</span>
                    <span><i className={`${isHeart} heart icon`} onClick={this.clickHeart}></i>{`${friendNum} Friends`}</span>

                </div>
            </div>
        )
    }
}

Card.propTypes = propTypes;
Card.contextTypes = contextTypes;