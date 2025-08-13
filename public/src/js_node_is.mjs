import { object_property_exists } from "./object_property_exists.mjs";
export function js_node_is(n) {
  const ni = object_property_exists(n, "type");
  return ni;
}
