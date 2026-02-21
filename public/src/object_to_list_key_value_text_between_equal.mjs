import { list_map_property_key_value_text_between_equal } from "../../../love/public/src/list_map_property_key_value_text_between_equal.mjs";
import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
export function object_to_list_key_value_text_between_equal(env_vars) {
  let list = object_to_list(env_vars);
  let mapped2 = list_map_property_key_value_text_between_equal(list);
  return mapped2;
}
