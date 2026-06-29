import { js_visit_returns } from "../../../love/public/src/js_visit_returns.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_flo_body } from "../../../love/public/src/js_flo_body.mjs";
export function js_statement_add_before_return(ast, item) {
  function lambda(la) {
    js_visit_returns(ast, la);
  }
  let list = list_adder(lambda);
  let body_block = js_flo_body(ast);
  list_add(body_block, item);
}
