/**
 * Created by dxc on 2016/11/18.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Block} from 'fs-flex'
import './base.css'
class Simple extends Component {

    render() {
        const item = {
            bc:'#37caec',
            m:10
        };
        return (
            <div style={{padding:20}}>
                <h1>垂直布局</h1>
                <Block wf>
                    <Block vf bd mr={20} mt={20} h={500}>
                        <Block {...item} w={100} h={100}>1</Block>
                        <Block {...item} w={100} h={100}>2</Block>
                        <Block {...item} w={100} h={100}>3</Block>
                    </Block>
                    <Block vf bd mr={20} mt={20} h={500}>
                        <Block f="1" {...item}>1</Block>
                        <Block {...item} w={100} h={100}>2</Block>
                        <Block {...item} w={100} h={100}>3</Block>
                    </Block>
                    <Block vf bd mr={20} mt={20} h={500}>
                        <Block f="1" {...item} >1</Block>
                        <Block f="2" {...item}>2</Block>
                        <Block {...item} w={100} h={100}>3</Block>
                    </Block>
                    <Block vf j="c" bd mr={20} mt={20} h={500}>
                        <Block {...item} w={100} h={100}>1</Block>
                        <Block {...item} w={100} h={100}>2</Block>
                    </Block>
                    <Block vf j="e" bd mr={20} mt={20} h={500}>
                        <Block {...item} w={100} h={100}>1</Block>
                        <Block {...item} w={100} h={100}>2</Block>
                    </Block>
                    <Block vf j="a" bd mr={20} mt={20} h={500}>
                        <Block {...item} w={100} h={100}>1</Block>
                        <Block {...item} w={100} h={100}>2</Block>
                    </Block>
                    <Block vf j="b" bd mr={20} mt={20} h={500}>
                        <Block {...item} w={100} h={100}>1</Block>
                        <Block {...item} w={100} h={100}>2</Block>
                    </Block>
                </Block>
            </div>
        )
    }
}
ReactDOM.render(
    <Simple />,
    document.getElementById('__react-content')
);