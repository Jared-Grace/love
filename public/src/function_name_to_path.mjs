import {function_name_to_base} from './function_name_to_base.mjs'
import path from 'path';
export function function_name_to_path(funcName) {
    let second = ['public', 'src', function_name_to_base(funcName)];
    let joined = path.join(...second);
    return joined;
}