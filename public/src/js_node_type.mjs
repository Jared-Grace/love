import { object_property_exists } from "./object_property_exists.mjs";
export function js_node_is(n) {
  return object_property_exists(n, "type");
}
