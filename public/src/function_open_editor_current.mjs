import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_open_editor } from "../../../love/public/src/function_open_editor.mjs";
export async function function_open_editor_current() {
  let f_name_current = await function_current_get();
  let v = await function_open_editor(f_name_current);
  return v;
}
