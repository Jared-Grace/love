import { js_identifier_unique } from "../../../love/public/src/js_identifier_unique.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
export async function js_identifier_unique_ast(ast, property_name) {
  let existing = js_identifiers_names(ast);
  let unique = await js_identifier_unique(existing, property_name);
  return unique;
}
