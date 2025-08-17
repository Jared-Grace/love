import { object_property_get } from "./object_property_get.mjs";
export function js_node_type(n) {
  const nt = object_property_get(n, "type");
  return nt;
}
