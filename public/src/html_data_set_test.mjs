import { html_data_set_test_suffixes } from "../../../love/public/src/html_data_set_test_suffixes.mjs";
export function html_data_set_test(component, value) {
  let suffixes = [];
  html_data_set_test_suffixes(component, suffixes, value);
}
