import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_declaration_declarators_get(node) {
  let value = property_get(node, "declarations");
  return value;
}
