import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
export function command_line_text_env_vars(dictionary, command) {
  let list = object_to_list(dictionary);
  function lambda(item) {
    let key = property_get(item, "key");
    let value = property_get(item, "value");
    let combined = text_combine_multiple(["set ", LIB_ENTRY, "="]);
  }
  let mapped = list_map(list, lambda);
}
