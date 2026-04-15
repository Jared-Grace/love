import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_size_2 } from "../../../love/public/src/list_size_2.mjs";
import { list_add_if_not_includes } from "../../../love/public/src/list_add_if_not_includes.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { js_call_args_code } from "../../../love/public/src/js_call_args_code.mjs";
import { function_curryify_specify_curried_right } from "../../../love/public/src/function_curryify_specify_curried_right.mjs";
import { function_curryify_specify_name_get_curried_right } from "../../../love/public/src/function_curryify_specify_name_get_curried_right.mjs";
import { list_join_comma } from "../../../love/public/src/list_join_comma.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_map_index_of_1 } from "../../../love/public/src/list_map_index_of_1.mjs";
import { js_identifiers_names_difference_try } from "../../../love/public/src/js_identifiers_names_difference_try.mjs";
import { todo } from "../../../love/public/src/todo.mjs";
import { list_last_is } from "../../../love/public/src/list_last_is.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { js_imports_missing_add_specified } from "../../../love/public/src/js_imports_missing_add_specified.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { js_function_declaration_name } from "../../../love/public/src/js_function_declaration_name.mjs";
import { function_curryify } from "../../../love/public/src/function_curryify.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { js_call_callee_name_try } from "../../../love/public/src/js_call_callee_name_try.mjs";
import { function_curryify_generic_name } from "../../../love/public/src/function_curryify_generic_name.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
import { js_call_arguments_get } from "../../../love/public/src/js_call_arguments_get.mjs";
import { js_call_is } from "../../../love/public/src/js_call_is.mjs";
import { js_identifier_list_is } from "../../../love/public/src/js_identifier_list_is.mjs";
import { js_function_declaration_params_get } from "../../../love/public/src/js_function_declaration_params_get.mjs";
import { js_statement_expression_get } from "../../../love/public/src/js_statement_expression_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_expression_statement_is } from "../../../love/public/src/js_expression_statement_is.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { js_function_declaration_to_block_body } from "../../../love/public/src/js_function_declaration_to_block_body.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_function_nodes_list } from "../../../love/public/src/js_visit_function_nodes_list.mjs";
export async function js_curry_replace(ast) {
  log(js_curry_replace.name, {});
  let f_names = await functions_names();
  function lambda2(la) {
    let list = js_visit_function_nodes_list(ast);
    async function lambda(v) {
      let node = property_get(v, "node");
      let body_block = js_function_declaration_to_block_body(node);
      let s1 = list_size_1(body_block);
      if (s1) {
        let only = list_single(body_block);
        let esi = js_expression_statement_is(only);
        if (esi) {
          let expression = js_statement_expression_get(only);
          let params = js_function_declaration_params_get(node);
          let ii_only = js_identifier_list_is(params);
          if (ii_only) {
            let ci = js_call_is(expression);
            if (ci) {
              let f_name = js_call_callee_name_try(expression);
              let includes = list_includes(f_names, f_name);
              if (includes) {
                let args = js_call_arguments_get(expression);
                let difference = js_identifiers_names_difference_try(
                  args,
                  params,
                );
                let difference_sz_1 = list_size_1(difference);
                let first = list_first(difference);
                let fi = list_first_is(args, first);
                let name_get = null;
                let curry_generate = null;
                if (fi && difference_sz_1) {
                  name_get = function_curryify_generic_name;
                  curry_generate = function_curryify;
                } else {
                  let li = list_last_is(args, first);
                  if (li && difference_sz_1) {
                    todo();
                  } else {
                    let positions_1 = list_map_index_of_1(difference, args);
                    let positions_1_comma = list_join_comma(positions_1);
                    let e = list_empty_is(params);
                    if (e) {
                    } else {
                    name_get =
                      function_curryify_specify_name_get_curried_right(
                        positions_1,
                      );
                    }
                    curry_generate =
                      await function_curryify_specify_curried_right(
                        positions_1_comma,
                      );
                  }
                }
                let name_curried2 = name_get(f_name);
                let added = list_add_if_not_includes(f_names, name_curried2);
                if (added) {
                  await curry_generate(f_name);
                }
                let name_curried = name_curried2;
                let call = js_call_args_code(name_curried, []);
                js_call_arguments_add(call, difference);
                let name_function = js_function_declaration_name(node);
                let declare = js_declare(name_function, call);
                object_replace(node, declare);
                la(name_curried);
              }
            }
          }
        }
      }
      let s2 = list_size_2(body_block);
      if (s2) {
        log(js_curry_replace.name, {
          s2,
        });
      }
    }
    each(list, lambda);
  }
  let f_names_added = list_adder_unique(lambda2);
  await js_imports_missing_add_specified(ast, f_names_added);
  function js_call_arguments_add(call, difference) {
    let args2 = js_call_arguments_get(call);
    list_add_multiple(args2, difference);
  }
}
