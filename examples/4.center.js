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
                <Block s={modal} j="c" a="c">
                    <Block w={240} h={240} bc="rgba(40, 40, 40, 0.75)" fc="#fff" s={{borderRadius:10}}>
                        <Block vf>
                            <div>123123</div>
                            <div>3333</div>
                        </Block>

                    </Block>
                </Block>
            </div>
        )
    }
}
ReactDOM.render(
    <Horizontal />,
    document.getElementById('__react-content')
);