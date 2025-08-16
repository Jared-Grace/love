import { js_code_string } from "./js_code_string.mjs";
import { marker_assign_replace } from "./marker_assign_replace.mjs";
export async function marker_assign_replace_string(value) {
  let code_string = await js_code_string(value_string);
  let v = await marker_assign_replace(value);
  return v;
}
