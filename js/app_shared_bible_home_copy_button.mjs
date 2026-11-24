import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
import { noop } from "./noop.mjs";
import { app_shared_bible_toggle_update } from "./app_shared_bible_toggle_update.mjs";
import { property_get } from "./property_get.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { list_add } from "./list_add.mjs";
export function app_shared_bible_home_copy_button({
  bottom,
  verse_number,
  chapter_code,
  languages_verses,
  p_verse,
  lines_copy_extra,
  verse_numbers_chosen,
}) {
  arguments_assert(arguments, 1);
  ("the verses picked are handed in, because a screen showing a whole passage starts with all of its verses picked, so one press copies the passage; a screen showing one verse hands in an empty list and the press picks that verse. the list of things to redraw is still opened here, the only place it is looked at.");
  let updates = [];
  let component = app_shared_button_copy(bottom, noop);
  let v = app_shared_bible_toggle_update(
    updates,
    {
      verse_numbers_chosen,
      chapter_code,
      languages_verses,
      lines_copy_extra,
    },
    verse_number,
    p_verse,
  );
  let choose = property_get(v, "choose");
  html_on_click(component, choose);
  let update = property_get(v, "update");
  list_add(updates, update);
}
