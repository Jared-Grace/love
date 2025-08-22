import { list_empty_is } from "./list_empty_is.mjs";
import { assert_not } from "./assert_not.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { each } from "./each.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
export async function function_identifier_replace(
  identifier_name,
  replacement,
) {
  let f_name = await data_function_current_get();
  function lambda2(ast) {
    let identifiers_named = js_identifiers_named(ast, identifier_name);
    let b = list_empty_is(identifiers_named);
    assert_not(b);
    marker("1");
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
