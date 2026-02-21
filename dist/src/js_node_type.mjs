import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_node_type(n) {
  const nt = property_get(n, "type");
  return nt;
}
