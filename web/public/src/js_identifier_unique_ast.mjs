import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
export function js_identifier_unique_ast(ast, property_name) {
  let existing = js_identifiers_names(ast);
  let unique = js_identifier_unique(existing, property_name);
  return unique;
}
