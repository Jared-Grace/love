import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_rows_set(input, row_count) {
  html_attribute_set(input, "rows", row_count);
}
