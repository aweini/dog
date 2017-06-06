/**
 * Created by mahong on 17/6/6.
 */
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
    <div>hello world!</div>,
    document.getElementById('wrap')
)

if(module.hot){
    module.hot.accept();
}