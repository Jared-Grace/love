import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { html_data_set } from "../../../love/public/src/html_data_set.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function html_data_set_test_suffix(suffix, component, value) {
  let combined2 = function_name_combine_multiple(parts);
  let combined = text_combine("test", suffix);
  html_data_set(component, combined, value);
}
