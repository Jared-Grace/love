import { property_key_value_text_between_equal } from "./property_key_value_text_between_equal.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_property_key_value_text_between_equal(list) {
  let mapped = list_map(list, property_key_value_text_between_equal);
  return mapped;
}
