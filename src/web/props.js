/**
 * Created by dxc on 2016/9/7.
 */
import abbr from './abbr'
import unit from './unit'
export default function (props) {
    El(props);
    abbr(props);
    unit(props);
}
function El(props) {
    if (props.el == null)
        props.el = 'div'
}