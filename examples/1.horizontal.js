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
            <div style={{padding:20,}}>
                <h1>水平布局</h1>
                <Block hf bd mt={20}>
                    <Block {...item} w={100} h={100}>1</Block>
                    <Block {...item} w={100} h={100}>2</Block>
                    <Block {...item} w={100} h={100}>3</Block>
                </Block>
                <Block hf bd mt={20}>
                    <Block f="1" {...item}>1</Block>
                    <Block {...item} w={100} h={100}>2</Block>
                    <Block {...item} w={100} h={100}>3</Block>
                </Block>
                <Block hf bd mt={20}>
                    <Block f="1" {...item} >1</Block>
                    <Block f="2" {...item}>2</Block>
                    <Block {...item} w={100} h={100}>3</Block>
                </Block>
                <Block hf bd mt={20} j="c">
                    <Block {...item} w={100} h={100}>1</Block>
                    <Block {...item} w={100} h={100}>2</Block>
                    <Block {...item} w={100} h={100}>3</Block>
                </Block>
                <Block hf bd mt={20} j="e">
                    <Block {...item} w={100} h={100}>1</Block>
                    <Block {...item} w={100} h={100}>2</Block>
                    <Block {...item} w={100} h={100}>3</Block>
                </Block>
                <Block hf bd mt={20} j="a">
                    <Block {...item} w={100} h={100}>1</Block>
                    <Block {...item} w={100} h={100}>2</Block>
                    <Block {...item} w={100} h={100}>3</Block>
                </Block>
                <Block hf bd mt={20} j="b">
                    <Block {...item} w={100} h={100}>1</Block>
                    <Block {...item} w={100} h={100}>2</Block>
                    <Block {...item} w={100} h={100}>3</Block>
                </Block>
                <Block hf bd mt={20} h={200} j="b">
                    <Block a="s">
                        <Block {...item} w={100} h={100}>1</Block>
                    </Block>
                    <Block a="c">
                        <Block {...item} w={100} h={100}>2</Block>
                    </Block>
                    <Block a="e">
                        <Block {...item} w={100} h={100}>3</Block>
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