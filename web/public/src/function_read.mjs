import { function_name_to_path } from './function_name_to_path.mjs'
export async function function_read(f_name) {

   await file_read(function_name_to_path(f_name))
}