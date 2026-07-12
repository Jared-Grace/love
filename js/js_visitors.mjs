import { list_adder } from "./list_adder.mjs";
import { js_visit } from "./js_visit.mjs";
export function js_visitors(ast) {
  function lambda(la) {
    js_visit(ast, la);
  }
  let vs = list_adder(lambda);
  return vs;
}
