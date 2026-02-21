import { property_exists } from "../../../love/public/src/property_exists.mjs";
export function js_node_is(n) {
  const ni = property_exists(n, "type");
  return ni;
}
