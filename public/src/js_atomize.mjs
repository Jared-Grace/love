import { js_type } from "./js_type.mjs";
import { marker } from "./marker.mjs";
export function js_atomize(ast) {
  marker();
  let result = js_type(ast, node_type);
}
