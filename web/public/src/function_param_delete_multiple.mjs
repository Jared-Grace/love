import { error } from "../../../love/public/src/error.mjs";
import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { list_remove_at_multiple } from "../../../love/public/src/list_remove_at_multiple.mjs";
import { list_sort_number } from "../../../love/public/src/list_sort_number.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { js_declaration_param_named } from "../../../love/public/src/js_declaration_param_named.mjs";
import { js_declaration_params_get } from "../../../love/public/src/js_declaration_params_get.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { function_params_new_generic } from "../../../love/public/src/function_params_new_generic.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function function_param_delete_multiple(param_names_comma) {
  assert_arguments(arguments, 1);
  let param_names = text_split_comma(param_names_comma);
  let indices = null;
  let f_name = error();
  await function_params_new_generic(
    function_transform_current_lambda,
    on_call,
    f_name,
  );
  function on_call(args) {
    list_remove_at_multiple(args, indices);
  }
  function function_transform_current_lambda(ast) {
    let declaration = js_declaration_single(ast);
    let params = js_declaration_params_get(declaration);
    function lambda(param_name) {
      let p = js_declaration_param_named(declaration, param_name);
      let index = list_index_of(params, p);
      return index;
    }
    indices = list_map(param_names, lambda);
    list_sort_number(indices);
    ("we want to remove later indices before earlier so the order does not shift while we remove");
    list_reverse(indices);
    list_remove_at_multiple(params, indices);
  }
}
