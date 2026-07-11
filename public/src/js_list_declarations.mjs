import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit_declarations } from "../../../love/public/src/js_visit_declarations.mjs";
export function js_list_declarations(ast, lambda$v) {
  function lambda(la) {}
  let list = list_adder(lambda);
  let r = js_visit_declarations(ast, lambda$v);
  return r;
}
