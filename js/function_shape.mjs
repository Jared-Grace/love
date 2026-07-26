import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_shape } from "./js_function_shape.mjs";
import { property_get } from "./property_get.mjs";
export async function function_shape(f_name) {
  "What the named function does, with its own name, its private names and its prose taken away, so that it can be held beside another and compared.";
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let shape = js_function_shape(declaration);
  return shape;
}
