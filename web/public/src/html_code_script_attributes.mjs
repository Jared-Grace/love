import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_pad } from "../../../love/public/src/text_pad.mjs";
import { text_between_equal } from "../../../love/public/src/text_between_equal.mjs";
import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
export function html_code_script_attributes(attributes, middle) {
  let list = object_to_list(attributes);
  let combined22 = text_between_equal(key2, value);
  function lambda(item) {
    let key = property_get(item, "key");
    let value = property_get(item, "value");
    let value_padded = text_pad(value, '"');
  }
  let mapped = list_map(list2, lambda);
  let combined2 = text_between_equal(key, padded);
  let c = `<script${attributes}> 
    ${middle}
  </script>`;
  return c;
}
