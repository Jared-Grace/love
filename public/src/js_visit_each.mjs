import { each } from "../../../love/public/src/each.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function js_visit_each(a, lambda$item) {
  marker("1");
  function lambda2(la) {
    let v = js_visit(a, la);
    return v;
  }
  let vs = list_adder(lambda2);
  each(vs, lambda$item);
}
