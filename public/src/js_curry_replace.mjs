import { list_all } from "../../../love/public/src/list_all.mjs";
import { js_function_declaration_params_get } from "../../../love/public/src/js_function_declaration_params_get.mjs";
import { js_statement_expression_get } from "../../../love/public/src/js_statement_expression_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_expression_statement_is } from "../../../love/public/src/js_expression_statement_is.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { js_function_declaration_to_block_body } from "../../../love/public/src/js_function_declaration_to_block_body.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_function_nodes_list } from "../../../love/public/src/js_visit_function_nodes_list.mjs";
export function js_curry_replace(ast) {
  let list = js_visit_function_nodes_list(ast);
  function lambda(v) {
    let node = property_get(v, "node");
    let body_block = js_function_declaration_to_block_body(node);
    let s1 = list_size_1(body_block);
    if (s1) {
      let only = list_single(body_block);
      let esi = js_expression_statement_is(only);
      if (esi) {
        let params = js_function_declaration_params_get(node);
        function lambda2(item) {}
        let a = list_all(list2, lambda2);
        let expression = js_statement_expression_get(esi);
      }
    }
    log(js_curry_replace.name, {
      node,
      body_block,
    });
  }
  each(list, lambda);
}
