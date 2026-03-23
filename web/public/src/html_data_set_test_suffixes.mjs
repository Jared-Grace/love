import { html_data_set_test_suffixes_attribute } from "../../../love/public/src/html_data_set_test_suffixes_attribute.mjs";
import { html_data_set } from "../../../love/public/src/html_data_set.mjs";
export function html_data_set_test_suffixes(component, suffixes, value) {
  let combined = html_data_set_test_suffixes_attribute(suffixes);
  html_data_set(component, combined, value);
}
