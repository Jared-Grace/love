import {file_overwrite} from './file_overwrite.mjs'
export async function function_new(f_name) {
function function_name_to_base(funcName) {
    return funcName + '.mjs';
}
   await file_overwrite(function_name_to_base(f_name), 'export function '+f_name+'(){}')
}