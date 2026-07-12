import { function_params_new_generic } from "./function_params_new_generic.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_intersect_empty_is_assert } from "./list_intersect_empty_is_assert.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_flo_params_add } from "./js_flo_params_add.mjs";
import { text_split } from "./text_split.mjs";
export async function function_params_new(
  f_name,
  param_names_comma,
  values_default_comma,
) {
  arguments_assert(arguments, 3);
  let param_names = text_split(param_names_comma, ",");
  let values_default = text_split(values_default_comma, ",");
  await function_params_new_generic(
    function_transform_current_lambda,
    on_call,
    f_name,
  );
  function on_call(args) {
    function lambda(value_default) {
      let expression = js_parse_expression(value_default);
      list_add(args, expression);
    }
    each(values_default, lambda);
  }
  function function_transform_current_lambda(ast) {
    if (false) {
      let names = js_identifiers_names(ast);
      list_intersect_empty_is_assert(names, param_names);
    }
    js_flo_params_add(ast, param_names);
  }
}
