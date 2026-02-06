import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit } from "../../../love/public/src/js_visit.mjs";
export function js_visitors(ast) {
  function lambda(la) {
    js_visit(ast, la);
  }
  let vs = list_adder(lambda);
  return vs;
}
