import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function js_node_type(n) {
  const nt = object_property_get(n, "type");
  return nt;
}
