import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_arcs_marks_press_go } from "./app_g_arcs_marks_press_go.mjs";
import { property_get } from "./property_get.mjs";
import { html_on_click } from "./html_on_click.mjs";
export function app_g_arcs_marks_press_mark_listen({
  mark,
  number,
  marks,
  counted,
  press,
  at,
  chips,
  sheet_code,
  count,
  panel,
  strip,
}) {
  arguments_assert(arguments, 1);
  function tapped() {
    app_g_arcs_marks_press_go({
      number,
      carry: false,
      marks,
      counted,
      press,
      at,
      chips,
      sheet_code,
      count,
      panel,
      strip,
    });
  }
  let was = property_get(mark, "was");
  let now = property_get(mark, "now");
  html_on_click(was, tapped);
  html_on_click(now, tapped);
}
