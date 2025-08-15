import { function_current_set } from "./function_current_set.mjs";
import { data_transform } from "./data_transform.mjs";
import { data_save } from "./data_save.mjs";
import { data_get } from "./data_get.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { file_open } from "./file_open.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { file_open_editor } from "./file_open_editor.mjs";
export async function function_open_editor(f_name) {
  const { f_path } = await function_name_to_path_unalias(f_name);
  await file_open_editor(f_path);
  await function_current_set(f_name);
}
