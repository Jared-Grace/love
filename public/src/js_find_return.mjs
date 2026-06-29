import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit_returns } from "../../../love/public/src/js_visit_returns.mjs";
export function js_find_return(ast) {
  function lambda(la) {
    js_visit_returns(ast, la);
  }
  let list = list_adder(lambda);
  let only = list_single(list);
  return only;
}
