import { function_parse_strict } from "./function_parse_strict.mjs";
import { function_parse_declaration_inner } from "./function_parse_declaration_inner.mjs";
import { marker } from "./marker.mjs";
export async function function_parse_strict_declaration(f_name) {
  marker("1");
  let parsed = await function_parse_strict(f_name);
  let to = function_parse_declaration_inner(parsed);
  return to;
}
