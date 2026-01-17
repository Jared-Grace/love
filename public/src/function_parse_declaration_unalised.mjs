import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_parse_declaration_unalised(f_name) {
  marker("1");
  let v = await function_parse_declaration(f_name);
  return v;
}
