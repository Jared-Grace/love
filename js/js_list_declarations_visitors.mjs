import { list_adder } from "./list_adder.mjs";
import { js_visit_declarations } from "./js_visit_declarations.mjs";
export function js_list_declarations_visitors(ast, lambda$v) {
  function lambda(la) {
    js_visit_declarations(ast, la);
  }
  let list = list_adder(lambda);
  return list;
}
