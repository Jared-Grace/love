import { function_parse_declaration_generic } from "./function_parse_declaration_generic.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_shape } from "./js_function_shape.mjs";
export async function file_shape(f_path) {
  "What the function in this file does, with its own name, its private names and its prose taken away, so it can be held beside one from somewhere else.";
  "The twin of this takes a function name rather than a path, and a name cannot tell two repos apart when both spell it the same way - which is the whole situation this exists for.";
  let parsed = await function_parse_declaration_generic(file_js_parse, f_path);
  let declaration = property_get(parsed, "declaration");
  let shape = js_function_shape(declaration);
  return shape;
}
