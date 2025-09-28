import { assert_arguments } from "./assert_arguments.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { object_properties } from "./object_properties.mjs";
import { function_transform } from "./function_transform.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { each_async } from "./each_async.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { function_transform_current } from "./function_transform_current.mjs";
import { js_declaration_single_params_add } from "./js_declaration_single_params_add.mjs";
import { string_split } from "./string_split.mjs";
export async function function_params_new(
  param_names_comma,
  values_default_comma,
) {
  assert_arguments(arguments, 2);
  let param_names = string_split(param_names_comma, ",");
  await function_transform_current(lambda1);
  function lambda1(ast) {
    js_declaration_single_params_add(ast, param_names);
  }
  let values_default = string_split(values_default_comma, ",");
  let f_name_current = await data_function_current_get();
  let result = await data_identifiers_search(f_name_current);
  let properties = object_properties(result);
  async function lambda4(f_name) {
    async function lambda5(ast) {
      js_visit_calls_named(f_name_current, lambda, ast);
    }
    let output = await function_transform(f_name, lambda5);
  }
  await each_async(properties, lambda4);
  function lambda({ args }) {
    function lambda3(value_default) {
      let expression2 = js_parse_expression(value_default);
      list_add(args, expression2);
    }
    each(values_default, lambda3);
  }
}
