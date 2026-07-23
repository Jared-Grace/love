import { list_adder_single } from "./list_adder_single.mjs";
import { js_visit_returns } from "./js_visit_returns.mjs";
export function js_find_return(ast) {
  function lambda(la) {
    js_visit_returns(ast, la);
  }
  let only = list_adder_single(lambda);
  return only;
}
