import { js_node_is } from "./js_node_is.mjs";
import { property_exists } from "./property_exists.mjs";
export function js_left_right_is(node) {
  let is =
    js_node_is(node) &&
    property_exists(node, "left") &&
    property_exists(node, "right");
  return is;
}
