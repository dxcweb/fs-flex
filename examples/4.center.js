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
        const modal = {
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 2000
        };
        return (
            <div style={{padding:20}}>
                <h1>居中</h1>
                <Block m="10px 10px">
123123
                </Block>
            </div>
        )
    }
}
ReactDOM.render(
    <Horizontal />,
    document.getElementById('__react-content')
);