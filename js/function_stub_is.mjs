import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_stub_is } from "./js_function_stub_is.mjs";
export async function function_stub_is(f_name) {
  "Whether the named function is an unwritten placeholder rather than a finished piece of work.";
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let stub = js_function_stub_is(declaration);
  return stub;
}
