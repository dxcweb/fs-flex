/**
 * Created by dxc on 2016/11/30.
 */
import React, {Component, PropTypes} from 'react';
import props from './props'
import addClass from './addClass'
export default class Block extends Component {
    render() {
        let {children, className, ...others} = this.props;
        const newClassName = addClass(others, className);
        props(others);
        const {el, ...otherProps}=others;
        const El = el;
        return (
            <El {...otherProps} className={newClassName}>{children}</El>
        );
    }
}