import { js_list_function_nodes_visitors } from "./js_list_function_nodes_visitors.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_single } from "./list_single.mjs";
import { js_expression_statement_is } from "./js_expression_statement_is.mjs";
import { js_statement_expression_get } from "./js_statement_expression_get.mjs";
import { js_identifier_list_is } from "./js_identifier_list_is.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { list_first_second } from "./list_first_second.mjs";
import { log } from "./log.mjs";
import { js_identifiers_names_equal } from "./js_identifiers_names_equal.mjs";
import { js_return_argument_identifier_is_if_async } from "./js_return_argument_identifier_is_if_async.mjs";
import { js_return_is_if_async } from "./js_return_is_if_async.mjs";
import { js_declare_single_identifier_is_if_async } from "./js_declare_single_identifier_is_if_async.mjs";
import { js_await_if_unwrap_argument } from "./js_await_if_unwrap_argument.mjs";
import { js_call_is_if_async } from "./js_call_is_if_async.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_identifiers_names_difference_try } from "./js_identifiers_names_difference_try.mjs";
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
import { each_async } from "./each_async.mjs";
export async function js_curry_replace_visitor(ast, name, f_names) {
  async function lambda2(la) {
    let list = js_list_function_nodes_visitors(ast);
    async function lambda(v) {
      let node = property_get(v, "node");
      let params = js_function_declaration_params_get(node);
      let body_block = js_function_declaration_to_block_body(node);
      let s = list_size_1(body_block);
      if (s) {
        let only = list_single(body_block);
        let esi = js_expression_statement_is(only);
        if (esi) {
          let expression = js_statement_expression_get(only);
          let ii_only = js_identifier_list_is(params);
          if (ii_only) {
            await on_expression(expression);
          }
        }
      }
      let s2 = list_size_2(body_block);
      if (s2) {
        let r = list_first_second(body_block);
        log(js_curry_replace_visitor.name, {
          r,
        });
        let first = property_get(r, "first");
        async function lambda4(init, id) {
          let second = property_get(r, "second");
          async function lambda6() {
            async function lambda5(argument) {
              let eq = js_identifiers_names_equal(id, argument);
              if (eq) {
                await on_expression(init);
              }
            }
            await js_return_argument_identifier_is_if_async(second, lambda5);
          }
          await js_return_is_if_async(second, lambda6);
        }
        await js_declare_single_identifier_is_if_async(first, lambda4);
      }
      async function on_expression(expression) {
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
    }
    await each_async(list, lambda);
  }
  return lambda2;
}
