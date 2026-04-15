import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_declare_init_get(node) {
  let r = property_get(node, "init");
  return r;
}
