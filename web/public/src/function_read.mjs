import { function_name_to_path } from './function_name_to_path.mjs'
import { file_read } from './file_read.mjs'
export async function function_read(f_name) {

  return await file_read(function_name_to_path(f_name))
}