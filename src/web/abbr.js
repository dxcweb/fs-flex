/**
 * Created by dxc on 2016/9/7.
 */
export default function (props) {
    props.style = {...props.style, ...props.s};
    delete props.s;
    baseStyle(props);
    paddingStyle(props);
    marginStyle(props);
    fontStyle(props);
    border(props)
}
function border(props) {
    if (props.bd) {
        props.style['borderWidth'] = 1;
        props.style['borderStyle'] = 'solid';
        if (props.bd === true) {
            props.style['borderColor'] = '#ddd';
        } else {
            props.style['borderColor'] = props.bd;
        }
        delete props.bd;
    }
    if (props.bdt) {
        props.style['borderTopWidth'] = 1;
        props.style['borderTopStyle'] = 'solid';
        if (props.bdt === true) {
            props.style['borderTopColor'] = '#ddd';
        } else {
            props.style['borderTopColor'] = props.bdt;
        }
        delete props.bdt;
    }
    if (props.bdb) {
        props.style['borderBottomWidth'] = 1;
        props.style['borderBottomStyle'] = 'solid';
        if (props.bdb === true) {
            props.style['borderBottomColor'] = '#ddd';
        } else {
            props.style['borderBottomColor'] = props.bdb;
        }
        delete props.bdb;
    }
    if (props.bdl) {
        props.style['borderLeftWidth'] = 1;
        props.style['borderLeftStyle'] = 'solid';
        if (props.bdl === true) {
            props.style['borderLeftColor'] = '#ddd';
        } else {
            props.style['borderLeftColor'] = props.bdl;
        }
        delete props.bdl;
    }
    if (props.bdr) {
        props.style['borderRightWidth'] = 1;
        props.style['borderRightStyle'] = 'solid';
        if (props.bdr === true) {
            props.style['borderRightColor'] = '#ddd';
        } else {
            props.style['borderRightColor'] = props.bdr;
        }
        delete props.bdr;
    }

    if (props.bdw) {
        props.style['borderWidth'] = props.bdw;
        delete props.bdw;
    }
    if (props.bds) {
        props.style['borderStyle'] = props.bds;
        delete props.bds;
    }
}
function paddingStyle(props) {
    props.p ? props.style['padding'] = props.p : 0;
    props.pl ? props.style['paddingLeft'] = props.pl : 0;
    props.pr ? props.style['paddingRight'] = props.pr : 0;
    props.pt ? props.style['paddingTop'] = props.pt : 0;
    props.pb ? props.style['paddingBottom'] = props.pb : 0;
    delete props.p;
    delete props.pl;
    delete props.pr;
    delete props.pt;
    delete props.pb;
}
function marginStyle(props) {
    props.m ? props.style['margin'] = props.m : 0;
    props.ml ? props.style['marginLeft'] = props.ml : 0;
    props.mr ? props.style['marginRight'] = props.mr : 0;
    props.mt ? props.style['marginTop'] = props.mt : 0;
    props.mb ? props.style['marginBottom'] = props.mb : 0;
    delete props.m;
    delete props.ml;
    delete props.mr;
    delete props.mt;
    delete props.mb;
}
function baseStyle(props) {
    props.w ? props.style['width'] = props.w : 0;
    props.h ? props.style['height'] = props.h : 0;
    props.bc ? props.style['background'] = props.bc : 0;
    delete props.w;
    delete props.h;
    delete props.bc;
}
function fontStyle(props) {
    props.fc ? props.style['color'] = props.fc : 0;
    props.fs ? props.style['fontSize'] = props.fs : 0;
    props.fw ? props.style['fontWeight'] = props.fw : 0;
    delete props.fc;
    delete props.fs;
    delete props.fw;
}