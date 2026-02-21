import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
export function html_code_script_attributes(attributes, middle) {
  let list = object_to_list(attributes);
  let c = `<script${attributes}> 
    ${middle}
  </script>`;
  return c;
}
