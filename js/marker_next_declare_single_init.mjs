import { marker_next_node } from "./marker_next_node.mjs";
import { js_declare_single_init } from "./js_declare_single_init.mjs";
export function marker_next_declare_single_init(a) {
  let next = marker_next_node(a);
  let oe = js_declare_single_init(next);
  return oe;
}
