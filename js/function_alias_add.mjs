import { function_exists_assert_json } from "./function_exists_assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_is_assert_json } from "./js_identifier_is_assert_json.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { undefined_not_is_assert_json } from "./undefined_not_is_assert_json.mjs";
import { list_sort_text_size } from "./list_sort_text_size.mjs";
import { function_alias_generic } from "./function_alias_generic.mjs";
import { property_set } from "./property_set.mjs";
import { error_json } from "./error_json.mjs";
export async function function_alias_add(first, second) {
  let list = [first, second];
  list_sort_text_size(list);
  let [alias, f_name] = list;
  let expression = js_parse_expression(f_name);
  js_identifier_is_assert_json(expression, {
    hint: "the function name should parse as a single identifier — is it a valid name?",
    f_name,
  });
  undefined_not_is_assert_json(f_name, {
    hint: "the function name to alias shouldn't be undefined",
  });
  await function_exists_assert_json(f_name, {
    hint: "the function to alias should exist before an alias can point at it",
  });
  function lambda(a) {
    let unaliased = property_get(a, "unaliased");
    let aliases = property_get(a, "aliases");
    let exists = property_get(a, "exists");
    if (exists) {
      error_json({
        message: "alias already exists",
        alias,
        unaliased,
      });
    }
    property_set(aliases, alias, f_name);
  }
  await function_alias_generic(alias, lambda);
}
