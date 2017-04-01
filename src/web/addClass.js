/**
 * Created by dxc on 2016/11/30.
 */
export default function (props, className) {
    const flexStyleObj = flexStyle(props);
    const justifyContentObj = justifyContent(props);
    const alignItemsObj = alignItems(props);
    const newClassNameObj = {...flexStyleObj, ...justifyContentObj, ...alignItemsObj};

    for (let key in newClassNameObj) {
        if (className == null || className == '') {
            className = key;
        } else {
            className += ' ' + key;
        }
    }
    return className;
}
function alignItems(props) {
    const newClassName = {};
    if (props.a == 's') {
        newClassName.as = true;
        delete props.a;
    } else if (props.a == 'c') {
        newClassName.ac = true;
        delete props.a;
    }
    else if (props.a == 'e') {
        newClassName.ae = true;
        delete props.a;
    }
    return newClassName;
}
function justifyContent(props) {
    const newClassName = {};
    if (props.j == 's') {
        newClassName.js = true;
        delete props.j;
    } else if (props.j == 'c') {
        newClassName.jc = true;
        delete props.j;
    } else if (props.j == 'e') {
        newClassName.je = true;
        delete props.j;
    } else if (props.j == 'a') {
        newClassName.ja = true;
        delete props.j;
    }
    else if (props.j == 'b') {
        newClassName.jb = true;
        delete props.j;
    }
    return newClassName;
}
//function commonStyle(props) {
//    const newClassName = {};
//    if (props.bd) {
//        newClassName.bd = true;
//        delete props.bd;
//    }
//    if (props.bdl) {
//        newClassName.bdl = true;
//        delete props.bdl;
//    }
//    if (props.bdr) {
//        newClassName.bdr = true;
//        delete props.bdr;
//    }
//    if (props.bdt) {
//        newClassName.bdt = true;
//        delete props.bdt;
//    }
//    if (props.bdb) {
//        newClassName.bdb = true;
//        delete props.bdb;
//    }
//    return newClassName;
//}
function flexStyle(props) {
    const newClassName = {};
    if (props.hf != null) {
        newClassName.hf = true;
        delete props.hf;
    }
    if (props.vf != null) {
        newClassName.vf = true;
        delete props.vf;
    }
    if (props.wf != null) {
        newClassName.wf = true;
        delete props.wf;
    }
    if (props.f != null) {
        newClassName['f' + props.f] = true;
        delete props.f;
    }
    return newClassName;
}