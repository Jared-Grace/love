import { list_find } from "./list_find.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_checked_get } from "./html_checked_get.mjs";
export function html_checkboxes_checked_value_get(checkboxes) {
  let only = list_find(checkboxes, html_checked_get);
  let value_checked = html_value_get(only);
  return value_checked;
}
