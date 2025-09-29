import { marker } from "../../../love/public/src/marker.mjs";
import { function_current_set } from "../../../love/public/src/function_current_set.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
export async function function_open(f_name) {
  marker("1");
  const { f_path } = await function_name_to_path_unalias(f_name);
  await file_open(f_path);
  await function_current_set(f_name);
}
