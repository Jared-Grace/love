import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { equal } from "./equal.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { each } from "./each.mjs";
export function availability_editor_render_preview(
  preview,
  ranges,
  chosen,
  line,
) {
  arguments_assert(arguments, 4);
  html_clear(preview);
  let has_ranges = list_empty_not_is(ranges);
  let none = equal(chosen, null);
  if (none) {
    app_shared_text_body(preview, "Pick how these times repeat");
  } else if (has_ranges) {
    each(ranges, line);
  } else {
    app_shared_text_body(preview, "Select times on the grid above");
  }
}
