import { marker } from "./marker.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_type(ast, node_type) {
  marker("1");
  function lambda(la) {
    js_visit_type(ast, node_type, la);
  }
  const vs = list_adder(lambda);
  return vs;
}
