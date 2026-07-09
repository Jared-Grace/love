import { list_add } from "../../../love/public/src/list_add.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_get_add(r_92_10_g, property_name, item) {
  let responses = property_get(r_92_10_g, property_name);
  list_add(responses, item);
}
