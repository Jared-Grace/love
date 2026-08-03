import { js_await_if_unwrap_argument } from "./js_await_if_unwrap_argument.mjs";
import { js_call_is_if_async } from "./js_call_is_if_async.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_identifiers_names_difference_try } from "./js_identifiers_names_difference_try.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_first } from "./list_first.mjs";
import { list_first_is } from "./list_first_is.mjs";
import { function_curryify_generic_name } from "./function_curryify_generic_name.mjs";
import { function_curryify } from "./function_curryify.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { function_curryify_right_name } from "./function_curryify_right_name.mjs";
import { function_curryify_right } from "./function_curryify_right.mjs";
import { list_map_index_of_1 } from "./list_map_index_of_1.mjs";
import { function_curryify_specify_name_get_curried_right } from "./function_curryify_specify_name_get_curried_right.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { function_curryify_specify_curried_right } from "./function_curryify_specify_curried_right.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { js_call_args_from_code } from "./js_call_args_from_code.mjs";
import { js_call_arguments_add } from "./js_call_arguments_add.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_declare } from "./js_declare.mjs";
import { object_replace } from "./object_replace.mjs";
export async function js_curry_expression_replace(
  expression,
  f_names,
  params,
  la,
  node,
) {
  expression = js_await_if_unwrap_argument(expression);
  await js_call_is_if_async(expression, on_call_is);
  async function on_call_is() {
    let f_name = js_call_callee_name_try(expression);
    let includes = list_includes(f_names, f_name);
    if (includes) {
      let args = js_call_arguments_get(expression);
      let difference = js_identifiers_names_difference_try(args, params);
      let difference_sz_ = list_size_1(difference);
      let first = list_first(difference);
      let fi = list_first_is(args, first);
      let name_get = null;
      let curry_generate = null;
      if (fi && difference_sz_) {
        name_get = function_curryify_generic_name;
        curry_generate = function_curryify;
      } else {
        let li = list_last_is(args, first);
        if (li && difference_sz_) {
          name_get = function_curryify_right_name;
          curry_generate = function_curryify_right;
        } else {
          let positions_ = list_map_index_of_1(difference, args);
          name_get =
            function_curryify_specify_name_get_curried_right(positions_);
          let positions_1_comma = list_join_comma(positions_);
          curry_generate =
            function_curryify_specify_curried_right(positions_1_comma);
        }
      }
      let name_curried = await name_get(f_name);
      let added = list_add_if_not_includes(f_names, name_curried);
      if (added) {
        await curry_generate(f_name);
      }
      la(name_curried);
      let call = js_call_args_from_code(name_curried, []);
      js_call_arguments_add(call, difference);
      let name_function = js_function_declaration_name(node);
      let declare = js_declare(name_function, call);
      object_replace(node, declare);
    }
  }
}
