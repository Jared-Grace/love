import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { html_checked_get } from "../../../love/public/src/html_checked_get.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function html_checkboxes_checked_value_get(checkboxes) {
  let checkeds = list_filter(checkboxes, html_checked_get);
  let only = list_single(checkeds);
  let value_checked = html_value_get(only);
  return value_checked;
}
