import {file_overwrite} from './file_overwrite.mjs'
import { function_name_to_base } from './function_name_to_base.mjs'
export async function function_new(f_name) {

   await file_overwrite(function_name_to_base(f_name), 'export function '+f_name+'(){}')
}