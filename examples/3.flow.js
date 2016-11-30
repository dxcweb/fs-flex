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
            bc: '#37caec',
            m: 10
        };
        return (
            <div style={{padding:20}}>
                <h1>流布局</h1>
                <Block wf>
                    <Block {...item} w={100} h={100}>1</Block>
                    <Block {...item} w={100} h={100}>2</Block>
                    <Block {...item} w={100} h={100}>3</Block>
                    <Block {...item} w={100} h={100}>4</Block>
                    <Block {...item} w={100} h={100}>5</Block>
                    <Block {...item} w={100} h={100}>6</Block>
                    <Block {...item} w={100} h={100}>7</Block>
                    <Block {...item} w={100} h={100}>8</Block>
                    <Block {...item} w={100} h={100}>9</Block>
                    <Block {...item} w={100} h={100}>10</Block>
                    <Block {...item} w={100} h={100}>11</Block>
                    <Block {...item} w={100} h={100}>12</Block>
                    <Block {...item} w={100} h={100}>13</Block>
                    <Block {...item} w={100} h={100}>14</Block>
                    <Block {...item} w={100} h={100}>15</Block>
                    <Block {...item} w={100} h={100}>16</Block>
                    <Block {...item} w={100} h={100}>17</Block>
                    <Block {...item} w={100} h={100}>18</Block>
                    <Block {...item} w={100} h={100}>19</Block>
                    <Block {...item} w={100} h={100}>20</Block>
                    <Block {...item} w={100} h={100}>21</Block>
                    <Block {...item} w={100} h={100}>22</Block>
                    <Block {...item} w={100} h={100}>23</Block>
                    <Block {...item} w={100} h={100}>24</Block>
                    <Block {...item} w={100} h={100}>25</Block>
                </Block>
            </div>
        )
    }
}
ReactDOM.render(
    <Simple />,
    document.getElementById('__react-content')
);