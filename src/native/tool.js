/**
 * Created by guowei on 16/12/19.
 */
function arrayMerge() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        simpleArrayMerge(arr, arguments[i])
    }
    return arr;
}
function simpleArrayMerge(arr1, arr2) {
    if (typeof arr2 == "object" && arr2 instanceof Array) {
        for (let i = 0; i < arr2.length; i++) {
            arr1.push(arr2[i]);
        }
    } else if (arr2 != null) {
        arr1.push(arr2);
    }
}
function abbrConverter(props, abbr) {
    const style = {};
    for (let key in abbr) {
        if (props[key]) {
            const type = typeof abbr[key];
            if (type == 'number' || type == 'string') {
                style[abbr[key]] = props[key];
                delete props[key];
            } else if (type == 'function') {
                Object.assign(style, abbr[key](props[key]))
            }
        }
    }
    return style;
}
export {arrayMerge,abbrConverter}