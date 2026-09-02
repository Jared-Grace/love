import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_arcs_lines_moved_said } from "./app_g_arcs_lines_moved_said.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { word_count_verb } from "./word_count_verb.mjs";
export function app_g_arcs_read_row_counted_held(
  moved_count,
  base_source,
  person,
) {
  arguments_assert(arguments, 3);
  let counted = app_g_arcs_lines_moved_said(moved_count);
  let nothing_moved = equal(moved_count, 0);
  let said =
    "not read yet, and there is no older copy of it, so nothing below is marked as moved";
  let read = equal(base_source, "read");
  if (read) {
    said = text_combine_multiple(["read before, and ", counted, " since"]);
  }
  let read_unmoved = read && nothing_moved;
  if (read_unmoved) {
    said = "read before, and nothing has moved since";
  }
  let revised = equal(base_source, "previous");
  if (revised) {
    said = text_combine_multiple([
      "not read yet, and ",
      counted,
      " since the notes on it were answered",
    ]);
  }
  let revised_unmoved = revised && nothing_moved;
  if (revised_unmoved) {
    said =
      "not read yet, and nothing has moved since the notes on it were answered";
  }
  let backed_up = equal(base_source, "backup");
  if (backed_up) {
    said = text_combine_multiple([
      "not read yet, and ",
      counted,
      " since the last content backup",
    ]);
  }
  let backup_unmoved = backed_up && nothing_moved;
  if (backup_unmoved) {
    said = "not read yet, and nothing has moved since the last content backup";
  }
  let held_count = property_get(person, "held_count");
  let some_held = not_equal(held_count, 0);
  if (some_held) {
    let counted_held = word_count_pluralize(held_count, "line");
    let held_verb = word_count_verb(held_count, "was", "were");
    said = text_combine_multiple([
      said,
      ", and ",
      counted_held,
      " you left notes on ",
      held_verb,
      " kept word for word",
    ]);
  }
  return said;
}
