import { data_files_update } from "./data_files_update.mjs";
import { marker } from "./marker.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_delete } from "./file_delete.mjs";
export async function function_delete(f_name) {
  marker("1");
  const f_path = function_name_to_path(f_name);
  await file_delete(f_path);
  await data_files_update();
}
