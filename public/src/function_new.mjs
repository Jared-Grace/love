import {function_open} from './function_open.mjs';
import {js_code_call} from './js_code_call.mjs';
import {file_overwrite} from "./file_overwrite.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
import {file_open} from "./file_open.mjs";
export async function function_new(f_name) {
  const f_path = function_name_to_path(f_name);
  await file_overwrite(f_path, "export function " + js_code_call(f_name) + "{}");
  await function_open(f_name);
}
