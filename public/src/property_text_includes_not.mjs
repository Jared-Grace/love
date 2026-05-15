import { text_includes_not_multiple } from "../../../love/public/src/text_includes_not_multiple.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_text_includes_not(object, property_name, parts) {
  let value = property_get(object, property_name);
  let n = text_includes_not_multiple(value, parts);
  return n;
}
