import { html_remove } from "./html_remove.mjs";
import { equal_not } from "./equal_not.mjs";
export function html_remove_if_not_null(value) {
  if (equal_not(value, null)) {
    html_remove(value);
  }
}
