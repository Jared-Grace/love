import { data_function_current_get } from "./data_function_current_get.mjs";
import { function_open_editor } from "./function_open_editor.mjs";
export async function function_open_editor_current(f_name) {
  let f_name_current = await data_function_current_get();
  let v = await function_open_editor(f_name);
  return v;
}
