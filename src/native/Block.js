/**
 * Created by guowei on 16/12/18.
 */
import React, {Component, PropTypes} from 'react';

import props from './props'
export default class Block extends Component {
    render() {
        let {children, ...others} = this.props;
        props(others);
        const {el, ...otherProps}=others;
        const El = el;
        return (
            <El {...otherProps}>{children}</El>
        );
    }
}