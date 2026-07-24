import { list_empty_is } from "./list_empty_is.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { each } from "./each.mjs";
export function function_identifier_replace_lambda(
  identifier_name,
  replacement,
) {
  function lambda2(ast) {
    let identifiers_named = js_identifiers_named(ast, identifier_name);
    let b = list_empty_is(identifiers_named);
    not_assert_json(b, {
      hint: "at least one identifier with this name should exist to replace — was the name not found?",
      identifier_name,
    });
    let from = js_parse_expression(replacement);
    function lambda(i) {
      let v = object_replace(i, from);
      return v;
    }
    each(identifiers_named, lambda);
  }
  return lambda2;
}
