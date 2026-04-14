import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
export function html_remove_if_not_null(value) {
  if (equal_not(value, null)) {
    html_remove(value);
  }
}
