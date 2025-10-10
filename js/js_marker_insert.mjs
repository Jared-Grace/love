import { js_call_insert } from "../../../love/public/src/js_call_insert.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
export async function js_marker_insert(name, list, index) {
  let code_string = await js_code_string(name);
  const f_name = marker.name;
  const args_code = [code_string];
  js_call_insert(f_name, args_code, list, index);
}
