/**
 * Created by guowei on 17/4/1.
 */
const calc = (value)=> {
    const int = parseInt(value);
    if (isNaN(int)) {
        return 0;
    }
    return parseInt(value) * 2 / 100 + 'rem'
};
const commonCalc = (props, arr)=> {
    arr.map((key)=> {
        const value = props.style[key];
        if (value && (value)) {
            const type = typeof value;
            if (type == 'number' || value.indexOf('%') < 0) {
                props.style[key] = calc(value);
            }
        }
    });

};
export default (props)=> {
    commonCalc(props,
        [
            'width', 'height', 'minHeight', 'maxHeight', 'minWidth', 'maxWidth',
            'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
            'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
            'left', 'top', 'bottom', 'right',
            'borderRadius', 'fontSize',
            'borderWidth','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth'
        ])
}
