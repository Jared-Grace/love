import { log } from "../../../love/public/src/log.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_visit_returns } from "../../../love/public/src/js_visit_returns.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_flo_body } from "../../../love/public/src/js_flo_body.mjs";
export function js_call_add_before_return(ast, item) {
  function lambda(la) {
    js_visit_returns(ast, la);
  }
  let list = list_adder(lambda);
  let only = list_single(list);
  let stack = only;
  log(js_call_add_before_return.name, {
    only,
  });
  return;
  let body_block = js_flo_body(ast);
  list_add(body_block, item);
}
