import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
import { list_intersect_empty_is_assert } from "../../../love/public/src/list_intersect_empty_is_assert.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { function_exists } from "../../../love/public/src/function_exists.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
import { function_transform_current } from "../../../love/public/src/function_transform_current.mjs";
import { js_declaration_single_params_add } from "../../../love/public/src/js_declaration_single_params_add.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
export async function function_params_new(
  param_names_comma,
  values_default_comma,
) {
  assert_arguments(arguments, 2);
  let param_names = string_split(param_names_comma, ",");
  await function_transform_current(function_transform_current_lambda);
  let values_default = string_split(values_default_comma, ",");
  let f_name_current = await function_current_get();
  let result = await data_identifiers_search(f_name_current);
  let properties = object_properties(result);
  async function lambda4(f_name) {
    let { exists } = await function_exists(f_name);
    if (not(exists)) {
      return;
    }
    async function lambda5(ast) {
      js_visit_calls_named(f_name_current, lambda, ast);
      function lambda({ args }) {
        function lambda3(value_default) {
          let expression2 = js_parse_expression(value_default);
          list_add(args, expression2);
        }
        each(values_default, lambda3);
      }
    }
    let output = await function_transform(f_name, lambda5);
  }
  await each_async(properties, lambda4);
  function function_transform_current_lambda(ast) {
    if (false) {
      let names = js_identifiers_names(ast);
      list_intersect_empty_is_assert(names, param_names);
    }
    js_declaration_single_params_add(ast, param_names);
  }
}
