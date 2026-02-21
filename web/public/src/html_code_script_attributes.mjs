import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_pad } from "../../../love/public/src/text_pad.mjs";
import { text_between_equal } from "../../../love/public/src/text_between_equal.mjs";
import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
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
  let joined = list_join_space(mapped);
  list_add_first(list2, item2);
  let c = `<script${"attributes"}> 
    ${middle}
  </script>`;
  return c;
}
