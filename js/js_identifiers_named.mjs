import { js_identifier_named_curried_right } from "./js_identifier_named_curried_right.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
export function js_identifiers_named(ast, identifier_name) {
  let identifiers = js_identifiers(ast);
  let r = js_identifier_named_curried_right(identifier_name);
  let identifiers_named = list_filter(identifiers, r);
  return identifiers_named;
}
