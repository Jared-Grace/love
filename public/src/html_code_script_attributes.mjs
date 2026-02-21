import { list_map_property_key_value_text_between_equal } from "../../../love/public/src/list_map_property_key_value_text_between_equal.mjs";
import { text_pad } from "../../../love/public/src/text_pad.mjs";
import { text_between_equal } from "../../../love/public/src/text_between_equal.mjs";
import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
export function html_code_script_attributes(attributes, middle) {
  let list = object_to_list(attributes);$x
  let mapped2 = list_map_property_key_value_text_between_equal(list);
  let padded = text_pad(s, '"');
  let combined2 = text_between_equal(key, padded);
  let c = `<script${attributes}> 
    ${middle}
  </script>`;
  return c;
}
