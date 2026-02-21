import { text_between_equal } from "../../../love/public/src/text_between_equal.mjs";
import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
export function html_code_script_attributes(attributes, middle) {
  let list = object_to_list(attributes);
  let combined2 = text_between_equal(key, value);
  let c = `<script${attributes}> 
    ${middle}
  </script>`;
  return c;
}
