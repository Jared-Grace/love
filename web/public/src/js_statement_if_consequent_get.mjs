import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_statement_if_consequent_get(node) {
  let value = property_get(node, "consequent");
  return value;
}
