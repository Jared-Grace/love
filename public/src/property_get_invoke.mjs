import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_get_invoke(p2, dictionary) {
  let property_name = p2();
  let entry = property_get(dictionary, property_name);
  return entry;
}
