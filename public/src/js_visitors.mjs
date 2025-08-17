import { list_adder } from "./list_adder.mjs";
import { js_visit } from "./js_visit.mjs";
import { marker } from "./marker.mjs";
export function js_visitors(ast) {
  marker("1");
  function lambda(la) {}
  let list = list_adder(lambda);
  let v = js_visit(ast, lambda$v);
  return v;
}
