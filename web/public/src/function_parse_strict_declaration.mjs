import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { function_parse_declaration_inner } from "./function_parse_declaration_inner.mjs";
import { marker } from "./marker.mjs";
export async function function_parse_strict_declaration(f_name) {
  marker("1");
  const f_path = function_name_to_path(unaliased);
  let parsed = await file_js_parse(f_path);
  let to = function_parse_declaration_inner(parsed);
  return to;
}
