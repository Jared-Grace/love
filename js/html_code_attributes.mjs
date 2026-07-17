import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export function html_code_attributes(attributes) {
  let list = object_to_list(attributes);
  function lambda(kv) {
    let key = property_get(kv, "key");
    let value = property_get(kv, "value");
    let r = text_combine_multiple([" ", key, '="', value, '"']);
    return r;
  }
  let mapped = list_map(list, lambda);
  let joined = list_join_empty(mapped);
  return joined;
}
