import {file_overwrite} from './file_overwrite.mjs'
import { function_name_to_path } from './function_name_to_path.mjs'
export async function function_new(f_name) {

    const f_path = function_name_to_path(f_name)
   await file_overwrite(f_path, 'export function '+f_name+'(){}')
   function_open(f_path)
}