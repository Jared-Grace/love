import { file_copy } from './file_copy.mjs'
import { function_name_to_path } from './function_name_to_path.mjs'
export async function function_copy(f_name_old, f_name_new) {

   await file_copy(function_name_to_path(f_name_old), function_name_to_path(f_name_new))
}