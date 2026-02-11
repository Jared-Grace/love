import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
import { marker_assign_replace } from "../../../love/public/src/marker_assign_replace.mjs";
export async function marker_assign_replace_text(value) {
  let code_string = await js_code_string(value);
  let v = await marker_assign_replace(code_string);
  return v;
}
