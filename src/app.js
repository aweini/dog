/**
 * Created by mahong on 17/6/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>hello world!</div>,
    document.getElementById('wrap')
)

if(module.hot){
    module.hot.accept();
}