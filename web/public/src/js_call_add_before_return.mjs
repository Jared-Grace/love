import { list_index_of_previous } from "../../../love/public/src/list_index_of_previous.mjs";
import { js_call_add_generic } from "../../../love/public/src/js_call_add_generic.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_visit_returns } from "../../../love/public/src/js_visit_returns.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_flo_body } from "../../../love/public/src/js_flo_body.mjs";
export async function js_call_add_before_return(ast, f_name) {
  let lambda_add = function lambda2(ast, statement) {
    function lambda(la) {
      js_visit_returns(ast, la);
    }
    let list = list_adder(lambda);
    let only = list_single(list);
    let stack = property_get(only, "stack");
    let e1 = list_get_end_1(stack);
    let index_previous = list_index_of_previous(list2, item2);
    log(js_call_add_before_return.name, {
      only,
    });
    return;
    let body_block = js_flo_body(ast);
    list_add(body_block, item);
  };
  await js_call_add_generic(ast, f_name, lambda_add);
}
