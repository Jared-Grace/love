import { function_open_editor } from "./function_open_editor.mjs";
export async function function_open_editor_current(f_name) {
  let v = await function_open_editor(f_name);
  return v;
}
