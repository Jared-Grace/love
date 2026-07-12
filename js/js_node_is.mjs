import { property_exists } from "./property_exists.mjs";
export function js_node_is(n) {
  let ni = property_exists(n, "type");
  return ni;
}
