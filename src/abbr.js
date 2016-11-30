/**
 * Created by dxc on 2016/9/7.
 */
export default function (props) {
    props.style = {...props.style,...props.s};
    delete props.s;
    baseStyle(props);
    paddingStyle(props);
    marginStyle(props);
    fontStyle(props);
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