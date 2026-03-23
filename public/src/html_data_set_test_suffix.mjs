import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { html_data_set } from "../../../love/public/src/html_data_set.mjs";
export function html_data_set_test_suffix(suffix, component, value) {
  let combined = function_name_combine_multiple(["test"]);
  html_data_set(component, combined, value);
}
