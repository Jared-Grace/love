import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { each } from "./each.mjs";
export function availability_editor_highlight(chosen, button_records) {
  arguments_assert(arguments, 2);
  function paint_button(record) {
    let selected = equal(record.kind, chosen);
    let right = app_shared_color_blue_dark();
    let outline = selected ? text_combine("3px solid ", right) : "none";
    html_style_assign(record.element, {
      outline: outline,
    });
  }
  each(button_records, paint_button);
}
