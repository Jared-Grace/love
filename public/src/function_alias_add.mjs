import { js_identifier_is_assert } from "../../../love/public/src/js_identifier_is_assert.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { undefined_not_is_assert } from "../../../love/public/src/undefined_not_is_assert.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_sort_string_size } from "../../../love/public/src/list_sort_string_size.mjs";
import { function_alias_generic } from "../../../love/public/src/function_alias_generic.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { error_json } from "./error_json.mjs";
export async function function_alias_add(first, second) {
  marker("1");
  let list = [first, second];
  list_sort_string_size(list);
  let [alias, f_name] = list;
  let expression = js_parse_expression(f_name);
  js_identifier_is_assert(expression);
  undefined_not_is_assert(f_name);
  function lambda(a) {
    let { exists, aliases, unaliased } = a;
    if (exists) {
      error_json({
        message: "alias already exists",
        alias,
        unaliased,
      });
    }
    object_property_set(aliases, alias, f_name);
  }
  await function_alias_generic(alias, lambda);
}
