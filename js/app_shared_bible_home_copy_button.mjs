import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
import { noop } from "./noop.mjs";
import { app_shared_bible_toggle_update } from "./app_shared_bible_toggle_update.mjs";
import { property_get } from "./property_get.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { list_add } from "./list_add.mjs";
export function app_shared_bible_home_copy_button(
  bottom,
  verse_number,
  chapter_code,
  languages_verses,
  p_verse,
) {
  arguments_assert(arguments, 5);
  ("the two lists are opened here rather than handed in, because this is the only place either of them is ever looked at. On a whole chapter the same pair is shared by every verse - one list of the verses picked and one of the things to redraw when the picking changes - so a screen showing one verse was handing in a pair only it could reach. Whoever gives the button a second verse to hold will have to hand them in again, and until then a name standing empty two functions away from its only reader was a question the reader had to answer for nothing.");
  let updates = [];
  let verse_numbers_chosen = [];
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
