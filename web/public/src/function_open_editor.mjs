import { marker } from "./marker.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { file_open_editor } from "./file_open_editor.mjs";
export async function function_open_editor(f_name) {
  marker("1");
  const { f_path } = await function_name_to_path_unalias(f_name);
  await file_open_editor(f_path);
}
