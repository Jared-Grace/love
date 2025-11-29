import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { js_declaration_param_named } from "../../../love/public/src/js_declaration_param_named.mjs";
import { js_declaration_params_get } from "../../../love/public/src/js_declaration_params_get.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_params_new_generic } from "../../../love/public/src/function_params_new_generic.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
import { list_intersect_empty_is_assert } from "../../../love/public/src/list_intersect_empty_is_assert.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_declaration_single_params_add } from "../../../love/public/src/js_declaration_single_params_add.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
export async function function_param_delete(param_name) {
  marker("1");
  assert_arguments(arguments, 1);
  let param_names = string_split(param_names_comma, ",");
  let values_default = string_split(values_default_comma, ",");
  await function_params_new_generic(function_transform_current_lambda, on_call);
  function on_call(args) {
    function lambda3(value_default) {
      let expression2 = js_parse_expression(value_default);
      list_add(args, expression2);
    }
    each(values_default, lambda3);
  }
  function function_transform_current_lambda(ast) {
    let declaration = js_declaration_single(ast);
    let params = js_declaration_params_get(declaration);
    let p = js_declaration_param_named(declaration, param_name);
    let index = null;
    index = list_index_of(params, p);
    list_remove_at(params, index);
    if (false) {
      let names = js_identifiers_names(ast);
      list_intersect_empty_is_assert(names, param_names);
    }
    js_declaration_single_params_add(ast, param_names);
  }
}
