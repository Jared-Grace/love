import { list_add_first } from "./list_add_first.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_pad } from "./text_pad.mjs";
import { text_between_equal } from "./text_between_equal.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_code_script_attributes(attributes, middle) {
  let list = object_to_list(attributes);
  function lambda(item) {
    let key = property_get(item, "key");
    let value = property_get(item, "value");
    let value_padded = text_pad(value, '"');
    let combined = text_between_equal(key, value_padded);
    return combined;
  }
  let mapped = list_map(list, lambda);
  list_add_first(mapped, "");
  let joined = list_join_space(mapped);
  let c = text_combine_multiple([
    "<script",
    joined,
    "> \n    ",
    middle,
    "\n  </script>",
  ]);
  return c;
}
