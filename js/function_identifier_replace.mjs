import { list_empty_is } from "./list_empty_is.mjs";
import { not_assert } from "./not_assert.mjs";
import { function_current_get } from "./function_current_get.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { each } from "./each.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_identifier_replace(
  identifier_name,
  replacement,
) {
  let f_name = await function_current_get();
  function lambda2(ast) {
    let identifiers_named = js_identifiers_named(ast, identifier_name);
    let b = list_empty_is(identifiers_named);
    not_assert(b);
    let from = js_parse_expression(replacement);
    function lambda(i) {
      let v = object_replace(i, from);
      return v;
    }
    each(identifiers_named, lambda);
  }
  let v2 = await function_transform(f_name, lambda2);
  return v2;
}
