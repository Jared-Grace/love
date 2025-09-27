import { data_function_current_get } from "./data_function_current_get.mjs";
import { each_async } from "./each_async.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_call_callee_name } from "./js_call_callee_name.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { function_transform_current } from "./function_transform_current.mjs";
import { js_declaration_single_params_add } from "./js_declaration_single_params_add.mjs";
import { string_split } from "./string_split.mjs";
export async function function_params_new(
  param_names_comma,
  values_default_comma,
) {
  let param_names = string_split(param_names_comma, ",");
  await function_transform_current(lambda);
  function lambda(ast) {
    js_declaration_single_params_add(ast, param_names);
  }
  let values_default = string_split(values_default_comma, ",");
  let f_name_current = await data_function_current_get();
  let result = await data_identifiers_search(f_name_current);
  async function lambda4(f_name) {
    function lambda2(v) {
      let { node } = v;
      let arguments2 = object_property_get(node, "arguments");
      function lambda3(value_default) {
        let expression2 = js_parse_expression(value_default);
        list_add(arguments2, expression2);
      }
      each(values_default, lambda3);
    }
    js_visit_type(ast2, "CallExpression", lambda2);
  }
  await each_async(result, lambda4);
  let name = js_call_callee_name(expression);
}
