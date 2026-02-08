import { function_copy_replace_first } from "../../../love/public/src/function_copy_replace_first.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_identifier_is_assert } from "../../../love/public/src/js_identifier_is_assert.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { undefined_not_is_assert } from "../../../love/public/src/undefined_not_is_assert.mjs";
import { list_sort_string_size } from "../../../love/public/src/list_sort_string_size.mjs";
import { function_alias_generic } from "../../../love/public/src/function_alias_generic.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { error_json } from "../../../love/public/src/error_json.mjs";
export async function function_alias_add(function_copy_replace_first, second) {
  let list = [function_copy_replace_first, second];
  list_sort_string_size(list);
  let [alias, f_name] = list;
  let expression = js_parse_expression(f_name);
  js_identifier_is_assert(expression);
  undefined_not_is_assert(f_name);
  function lambda(a) {
    let unaliased = object_property_get(a, "unaliased");
    let aliases = object_property_get(a, "aliases");
    let exists = object_property_get(a, "exists");
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
