import { property_get } from "./property_get.mjs";
export function property_get_invoke(b, property_name) {
  let click = property_get(b, property_name);
  click();
}
