import { js_call_insert } from "./js_call_insert.mjs";
import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
import { list_insert } from "./list_insert.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { marker } from "./marker.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_string } from "./js_code_string.mjs";
export async function js_marker_insert(name, list, index) {
  let code_string = await js_code_string(name);
  const f_name = marker.name;
  const args_code = [code_string];
  js_call_insert(f_name, args_code, list, index);
}
