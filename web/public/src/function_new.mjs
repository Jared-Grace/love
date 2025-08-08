import {function_name_to_path_unalias} from './function_name_to_path_unalias.mjs';
import {file_overwrite} from "./file_overwrite.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
import {file_open} from "./file_open.mjs";
export async function function_new(f_name) {
  const f_path = await function_name_to_path_unalias(f_name);
  await file_overwrite(f_path, "export function " + f_name + "(){}");
  await file_open(f_path);
}
