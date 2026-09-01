import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_g_arcs_mark_current_set } from "./app_g_arcs_mark_current_set.mjs";
import { app_g_arcs_marks_chip_current_set } from "./app_g_arcs_marks_chip_current_set.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_arcs_marks_place_remember } from "./app_g_arcs_marks_place_remember.mjs";
import { modulo } from "./modulo.mjs";
import { html_scroll_center_container_settled } from "./html_scroll_center_container_settled.mjs";
export function app_g_arcs_marks_press_go({
  number,
  carry,
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
  "Carries the reader to one change, rings both halves of it, takes the ring off whichever change was current before, and files where the tour has got to.";
  arguments_assert(arguments, 1);
  let mark = marks[number];
  let shown = add(number, 1);
  let v = String(shown);
  let said = text_combine_multiple(["change ", v, " of ", counted]);
  html_text_set(press, said);
  let current = property_get(at, "current");
  let ringed = not_equal(current, null);
  if (ringed) {
    app_g_arcs_mark_current_set(marks[current], false);
    app_g_arcs_marks_chip_current_set(chips[current], false);
  }
  app_g_arcs_mark_current_set(mark, true);
  app_g_arcs_marks_chip_current_set(chips[number], true);
  property_set(at, "current", number);
  app_g_arcs_marks_place_remember(sheet_code, number);
  let after = modulo(shown, count);
  property_set(at, "number", after);
  if (carry) {
    let was = property_get(mark, "was");
    html_scroll_center_container_settled(was, panel);
  }
  let open = property_get(at, "open");
  if (open) {
    html_scroll_center_container_settled(chips[number], strip);
  }
}
