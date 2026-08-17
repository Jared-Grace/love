import { arguments_assert } from "./arguments_assert.mjs";
import { html_checkboxes_checked_value_get } from "./html_checkboxes_checked_value_get.mjs";
export function html_checkboxes_lambda6(checkboxes, on_next) {
  arguments_assert(arguments, 2);
  let value_checked = html_checkboxes_checked_value_get(checkboxes);
  let v = on_next({
    value_checked,
  });
  return v;
}
