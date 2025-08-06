import {file_overwrite} from './file_overwrite.mjs'
import { function_name_to_path } from './function_name_to_path.mjs'
export async function function_new(f_name) {

   await file_overwrite(function_name_to_path(f_name), 'export function '+f_name+'(){}')
}