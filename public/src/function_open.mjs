import {function_name_to_path_unalias} from './function_name_to_path_unalias.mjs';
import {file_open} from "./file_open.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
export async function function_open(f_name) {
  const f_path = await function_name_to_path_unalias(f_name);
  await file_open(f_path);
}
