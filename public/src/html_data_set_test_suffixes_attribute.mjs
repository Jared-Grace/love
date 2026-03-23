import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function html_data_set_test_suffixes_attribute(suffixes) {
  const list = ["test"];
  list_add_multiple(list, suffixes);
  let combined = function_name_combine_multiple(list);
  return combined;
}
