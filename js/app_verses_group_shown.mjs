import { arguments_assert } from "./arguments_assert.mjs";
import { list_clear } from "./list_clear.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_verses_display } from "./app_verses_display.mjs";
import { property_get } from "./property_get.mjs";
import { app_verses_draw_save } from "./app_verses_draw_save.mjs";
export async function app_verses_group_shown(
  verse_groups,
  groups,
  card,
  display_group,
  verse_count_held,
  references,
  copy_after,
  copy,
) {
  "Putting a gathered set of verses on the screen, writing down what they were so reopening the app brings them back, and copying them out if that is what was asked for.";
  "THE LIST OF GROUPS IS EMPTIED AND REFILLED RATHER THAN REPLACED, because the caller holds that same list and would go on reading the old one.";
  "WHAT IS WRITTEN DOWN IS THE REFERENCES AND THE COUNT, never the verses themselves, so coming back in another language shows the same places said in the new words.";
  "COPYING HAPPENS LAST, after the verses are up, so a person watching sees what was copied rather than a screen that has not caught up.";
  arguments_assert(arguments, 8);
  list_clear(verse_groups);
  list_add_multiple(verse_groups, groups);
  app_verses_display(card, verse_groups, display_group);
  let count = property_get(verse_count_held, "verse_count");
  app_verses_draw_save({
    count,
    references,
  });
  if (copy_after) {
    await copy();
  }
}
