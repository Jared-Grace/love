import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_functions_nested_declarations } from "./js_functions_nested_declarations.mjs";
export async function function_nested_declarations(f_name) {
  arguments_assert(arguments, 1);
  ("Every function written inside the named one, as parsed declarations.");
  ("The three lines every reading about closures opens with - parse the file, take the tree out of what came back, ask it for the functions written inside. Kept together under one name so a reading about closures starts with the closures rather than with the parsing.");
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  let nested = js_functions_nested_declarations(ast);
  return nested;
}
