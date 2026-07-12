import { property_get } from "./property_get.mjs";
export function js_node_type(n) {
  let nt = property_get(n, "type");
  return nt;
}
