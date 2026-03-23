import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { html_data_set } from "../../../love/public/src/html_data_set.mjs";
export function html_data_set_test_suffixes(component, suffixes, value) {
  const list = ["test"];
  list_add_multiple(list, suffixes);
  let combined = function_name_combine_multiple(list);
  html_data_set(component, combined, value);
}
