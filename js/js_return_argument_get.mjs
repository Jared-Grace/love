import { property_get } from "./property_get.mjs";
export function js_return_argument_get(node) {
  let argument = property_get(node, "argument");
  return argument;
}
