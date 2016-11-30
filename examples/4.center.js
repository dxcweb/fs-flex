/**
 * Created by dxc on 2016/11/18.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Block} from 'fs-flex'
import './base.css'
class Horizontal extends Component {
    render() {
        const item = {
            bc: '#37caec',
            m: 10
        };
        return (
            <div style={{padding:20}}>
                <h1>居中</h1>
                <Block w={300} h={500} bd j="c" a="c">
                    <Block {...item} w={100} h={100} j="c" a="c">1</Block>
                </Block>
            </div>
        )
    }
}
ReactDOM.render(
    <Horizontal />,
    document.getElementById('__react-content')
);