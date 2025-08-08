import {marker} from './marker.mjs';
import {file_copy} from "./file_copy.mjs";
import {function_name_to_path_unalias} from "./function_name_to_path_unalias.mjs";
import {file_open} from "./file_open.mjs";
export async function function_copy(f_name_old, f_name_new) {
  const {f_path: f_path_new} = await function_name_to_path_unalias(f_name_new);
  const {f_path: f_path_old} = await function_name_to_path_unalias(f_name_old);
  await file_copy(f_path_old, f_path_new);
  marker();
  await file_open(f_path_new);
}
