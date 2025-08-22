import { list_single } from "./list_single.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_visit_match(ast, search) {
  function lambda2(la) {
    function lambda(v) {
      let { node } = v;
      if (node === search) {
        la(v);
      }
    }
    js_visit(ast, lambda);
  }
  let matches = list_adder(lambda2);
  let v_match = list_single(matches);
  return v_match;
}
