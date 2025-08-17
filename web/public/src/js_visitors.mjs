import { js_visit } from "./js_visit.mjs";
import { marker } from "./marker.mjs";
export function js_visitors(ast, lambda$v) {
  marker("1");
  return js_visit(ast, lambda$v);
}
