import { js_identifier_named } from "../../../love/public/src/js_identifier_named.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { js_identifiers } from "../../../love/public/src/js_identifiers.mjs";
export function js_identifiers_named(ast, identifier_name) {
  let identifiers = js_identifiers(ast);
  function lambda(i) {
    let v = js_identifier_named(i, identifier_name);
    return v;
  }
  let identifiers_named = list_filter(identifiers, lambda);
  return identifiers_named;
}
