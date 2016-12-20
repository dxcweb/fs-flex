/**
 * Created by guowei on 16/12/18.
 */
import {
    StyleSheet,
    View
} from 'react-native';
import {abbrConverter,arrayMerge} from './tool'
const abbrDic = {
    w: 'width',
    h: 'height',
    bc: 'backgroundColor',
    fc: 'color',
    fs: 'fontSize',
    fw: 'fontWeight',
    p: 'padding',
    pl: 'paddingLeft',
    pr: 'paddingRight',
    pt: 'paddingTop',
    pb: 'paddingBottom',
    m: 'margin',
    ml: 'marginLeft',
    mr: 'marginRight',
    mt: 'marginTop',
    mb: 'marginBottom',
    f: 'flex',
    hf: ()=> {
        return {flexDirection: 'row'}
    },
    wf: ()=> {
        return {flexDirection: 'row', flexWrap: 'wrap'}
    },
    vf: ()=> {
        return {flexDirection: 'column'}
    },
    j: (val)=> {
        if (val == 'c') {
            return {justifyContent: 'center'}
        } else if (val == 'e') {
            return {justifyContent: 'flex-end'}
        } else if (val == 'b') {
            return {justifyContent: 'space-between'}
        } else if (val == 'a') {
            return {justifyContent: 'space-around'}
        } else {
            return {justifyContent: 'flex-start'}
        }
    },
    a: (val)=> {
        if (val == 'c') {
            return {alignItems: 'center'}
        } else if (val == 'e') {
            return {alignItems: 'flex-end'}
        } else {
            return {alignItems: 'flex-start'}
        }
    },
    bd: ()=> {
        return {borderWidth : 1,borderColor:'#fff'}
    },
    bdt: ()=> {
        return {borderTopWidth : 1,borderTopColor:'#fff'}
    },
    bdl: ()=> {
        return {borderLeftWidth : 1,borderLeftColor:'#fff'}
    },
    bdr: ()=> {
        return {borderRightWidth : 1,borderRightColor:'#fff'}
    },
    bdb: ()=> {
        return {borderBottomWidth : 1,borderBottomColor:'#fff'}
    }
};
export default function (props) {
    if (props.el == null)
        props.el = View;
    const style = abbrConverter(props, abbrDic);
    const styles = StyleSheet.create({style});
    props.style = arrayMerge(props.style, props.s, styles.style);
    delete props.s;
}