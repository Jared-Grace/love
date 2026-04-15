import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_return_argument_get(node) {
  let value2 = property_get(node, "argument");
  return value2;
}
