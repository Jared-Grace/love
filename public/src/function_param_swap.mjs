import { js_declaration_single_params_add } from "../../../love/public/src/js_declaration_single_params_add.mjs";
import { list_intersect_empty_is_assert } from "../../../love/public/src/list_intersect_empty_is_assert.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { function_params_new_generic } from "../../../love/public/src/function_params_new_generic.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_transform_current } from "../../../love/public/src/function_transform_current.mjs";
import { list_swap } from "../../../love/public/src/list_swap.mjs";
import { js_declaration_param_named } from "../../../love/public/src/js_declaration_param_named.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { error } from "./error.mjs";
export async function function_param_swap(param_name_a, param_name_b) {
  error(
    "TODO: finish this; consider similar code in " + function_params_new.name,
  );
  await function_transform_current(lambda);
  function lambda(ast) {
    let declaration = js_declaration_single(ast);
    let a = js_declaration_param_named(declaration, param_name_a);
    let b = js_declaration_param_named(declaration, param_name_b);
    let { params } = declaration;
    list_swap(params, a, b);
  }
  marker("1");
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
    if (false) {
      let names = js_identifiers_names(ast);
      list_intersect_empty_is_assert(names, param_names);
    }
    js_declaration_single_params_add(ast, param_names);
  }
}
