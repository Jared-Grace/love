import { each } from "./each.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_visit_each(a, lambda$item) {
  function lambda(la) {
    let v = js_visit(a, la);
    return v;
  }
  let vs = list_adder(lambda);
  each(vs, lambda$item);
}
