import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_get_invoke(b, property_name) {
  let click2 = property_get(b, property_name);
  click2();
}
