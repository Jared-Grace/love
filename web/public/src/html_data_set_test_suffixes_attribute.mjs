import { html_data_set_test_attribute } from "../../../love/public/src/html_data_set_test_attribute.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function html_data_set_test_suffixes_attribute(suffixes) {
  let r = html_data_set_test_attribute();
  const list = [r];
  list_add_multiple(list, suffixes);
  let combined = function_name_combine_multiple(list);
  return combined;
}
