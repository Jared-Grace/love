import { js_curry_expression_replace } from "./js_curry_expression_replace.mjs";
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
import { each_async } from "./each_async.mjs";
export async function js_curry_replace_visitor(ast, f_names) {
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
            await js_curry_expression_replace(
              expression,
              f_names,
              params,
              la,
              node,
            );
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
                await js_curry_expression_replace(
                  init,
                  f_names,
                  params,
                  la,
                  node,
                );
              }
            }
            await js_return_argument_identifier_is_if_async(second, lambda5);
          }
          await js_return_is_if_async(second, lambda6);
        }
        await js_declare_single_identifier_is_if_async(first, lambda4);
      }
    }
    await each_async(list, lambda);
  }
  return lambda2;
}
