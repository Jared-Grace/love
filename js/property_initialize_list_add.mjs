import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add } from "./list_add.mjs";
export function property_initialize_list_add(result, key, value) {
  let list = property_initialize_list(result, key);
  list_add(list, value);
}
