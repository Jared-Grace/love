import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
import { noop } from "./noop.mjs";
import { app_shared_bible_toggle_update } from "./app_shared_bible_toggle_update.mjs";
import { property_get } from "./property_get.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { list_add } from "./list_add.mjs";
export function app_shared_bible_home_copy_button(
  bottom,
  updates,
  verse_numbers_chosen,
  verse_number,
  chapter_code,
  languages_verses,
  p_verse,
) {
  arguments_assert(arguments, 7);
  let component = app_shared_button_copy(bottom, noop);
  let v = app_shared_bible_toggle_update(
    updates,
    verse_numbers_chosen,
    verse_number,
    chapter_code,
    languages_verses,
    p_verse,
  );
  let choose = property_get(v, "choose");
  html_on_click(component, choose);
  let update = property_get(v, "update");
  list_add(updates, update);
}
