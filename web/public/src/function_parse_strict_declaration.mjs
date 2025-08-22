import { function_parse_declaration_inner } from "./function_parse_declaration_inner.mjs";
import { marker } from "./marker.mjs";
import { function_parse } from "./function_parse.mjs";
export async function function_parse_strict_declaration(f_name) {
  marker("1");
  let parsed = await function_parse(f_name);
  let to = function_parse_declaration_inner(parsed);
  return to;
}
