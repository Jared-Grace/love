import { js_identifier_named_curried_right } from "../../../love/public/src/js_identifier_named_curried_right.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { js_identifiers } from "../../../love/public/src/js_identifiers.mjs";
export function js_identifiers_named(ast, identifier_name) {
  let identifiers = js_identifiers(ast);
  let r2 = js_identifier_named_curried_right(identifier_name);
  let identifiers_named = list_filter(identifiers, lamr2da);
  return identifiers_named;
}
