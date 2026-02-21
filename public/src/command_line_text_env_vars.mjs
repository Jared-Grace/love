import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
export function command_line_text_env_vars(dictionary, command) {
  let list = object_to_list(dictionary);
  function lambda(item) {
    let combined = text_combine_multiple(list2);
    ("set LIB_ENTRY=public/src/app_index_main.mjs");
  }
  let mapped = list_map(list, lambda);
}
