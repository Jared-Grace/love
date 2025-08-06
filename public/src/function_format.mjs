import { function_name_to_path } from './function_name_to_path.mjs'
import { file_read } from './file_read.mjs'
import { js_format } from './js_format.mjs'
export async function function_format(f_name) {

    const f_path = function_name_to_path(f_name)
   let r=await file_read(f_path)
  let formatted=js_format(r)
  await file_overwrite(f_path,formatted)
}