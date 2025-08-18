import { marker } from "./marker.mjs";
import { each_async } from "./each_async.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_adder } from "./list_adder.mjs";
export async function js_visit_each(a, lambda) {
  marker("1");
  function lambda2(la) {
    let v = js_visit(a, la);
    return v;
  }
  let vs = list_adder(lambda2);
  await each_async(vs, lambda);
}
