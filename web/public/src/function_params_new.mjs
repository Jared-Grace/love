import { function_params_new_generic } from "../../../love/public/src/function_params_new_generic.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
import { list_intersect_empty_is_assert } from "../../../love/public/src/list_intersect_empty_is_assert.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_declaration_single_params_add } from "../../../love/public/src/js_declaration_single_params_add.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
export async function function_params_new(
  f_name,
  param_names_comma,
  values_default_comma,
) {
  assert_arguments(arguments, 3);
  let param_names = text_split(param_names_comma, ",");
  let values_default = text_split(values_default_comma, ",");
  await function_params_new_generic(
    function_transform_current_lambda,
    on_call,
    f_name,
  );
  function on_call(args) {
    function lambda3(value_default) {
      let expression2 = js_parse_expression(value_default);
      list_add(args, expression2);
    }
    each(values_default, lambda3);
  }
  function function_transform_current_lambda(ast) {
    if (false) {
      let names = js_identifiers_names(ast);
      list_intersect_empty_is_assert(names, param_names);
    }
    js_declaration_single_params_add(ast, param_names);
  }
}
