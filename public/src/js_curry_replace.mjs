import { list_map_index_of_1 } from "../../../love/public/src/list_map_index_of_1.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_identifiers_names_difference } from "../../../love/public/src/js_identifiers_names_difference.mjs";
import { todo } from "../../../love/public/src/todo.mjs";
import { list_last_is } from "../../../love/public/src/list_last_is.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { js_imports_missing_add_specified } from "../../../love/public/src/js_imports_missing_add_specified.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_call_arg } from "../../../love/public/src/js_call_arg.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { js_function_declaration_name } from "../../../love/public/src/js_function_declaration_name.mjs";
import { function_curryify } from "../../../love/public/src/function_curryify.mjs";
import { list_includes_not } from "../../../love/public/src/list_includes_not.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { js_call_callee_name_try } from "../../../love/public/src/js_call_callee_name_try.mjs";
import { function_curryify_generic_name } from "../../../love/public/src/function_curryify_generic_name.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
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
              log(js_curry_replace.name, {
                s1,
                esi,
                ii_only,
                ci,
              });
              let f_name = js_call_callee_name_try(expression);
              let includes = list_includes(f_names, f_name);
              if (includes) {
                let args = js_call_arguments_get(expression);
                let ii_expression = js_identifier_list_is(args);
                if (ii_expression) {
                  let difference = js_identifiers_names_difference(
                    args,
                    params,
                  );
                  let difference_sz_1 = list_size_1(difference);
                  if (difference_sz_1) {
                    let only = list_single(difference);
                    let fi = list_first_is(args, only);
                    if (fi) {
                      let name_curried = function_curryify_generic_name(f_name);
                      let n = list_includes_not(f_names, name_curried);
                      if (n) {
                        let output = await function_curryify(f_name);
                        list_add(f_names, name_curried);
                      }
                      let name_function = js_function_declaration_name(node);
                      let arg_name = js_identifier_name(only);
                      let c = js_call_arg(name_curried, arg_name);
                      let declare = js_declare(name_function, c);
                      object_replace(node, declare);
                      la(name_curried);
                    } else {
                      let li = list_last_is(args, only);
                      if (li) {
                        todo();
                      } else {
                        let difference2 = js_identifiers_names_difference(
                          args,
                          difference,
                        );
                        let mapped2 = list_map_index_of_1(difference2, args);
                        log(js_curry_replace.name, {
                          mapped2,
                        });
                      }
                    }
                  } else {
                    todo();
                  }
                }
              }
            }
          }
        }
      }
    }
    each(list, lambda);
  }
  let f_names_added = list_adder_unique(lambda2);
  await js_imports_missing_add_specified(ast, f_names_added);
}
