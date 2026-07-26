import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_free_names } from "./js_function_declaration_free_names.mjs";
import { list_includes } from "./list_includes.mjs";
export async function function_marked_is(f_name, marker) {
  "Whether the named function carries the given mark in its body.";
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let free = js_function_declaration_free_names(declaration);
  let marked = list_includes(free, marker);
  return marked;
}
