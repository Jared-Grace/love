import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { list_remove_at_multiple } from "../../../love/public/src/list_remove_at_multiple.mjs";
import { list_sort_number } from "../../../love/public/src/list_sort_number.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { js_declaration_param_named } from "../../../love/public/src/js_declaration_param_named.mjs";
import { js_declaration_params_get } from "../../../love/public/src/js_declaration_params_get.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_params_new_generic } from "../../../love/public/src/function_params_new_generic.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function function_param_delete_multiple(param_names_comma) {
  marker("1");
  assert_arguments(arguments, 1);
  let param_names = string_split_comma(param_names_comma);
  await function_params_new_generic(function_transform_current_lambda, on_call);
  function on_call(args) {
    list_remove_at(args, index);
  }
  function function_transform_current_lambda(ast) {
    function lambda(param_name) {
      let declaration = js_declaration_single(ast);
      let params = js_declaration_params_get(declaration);
      let p = js_declaration_param_named(declaration, param_name);
      let index = list_index_of(params, p);
      return index;
    }
    let indices = list_map(param_names, lambda);
    list_sort_number(indices);
    ("we want to remove later indices before earlier so the order does not shift while we remove");
    list_reverse(indices);
    list_remove_at_multiple(indices, removals);
  }
}
