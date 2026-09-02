import { invoke_multiple } from "./invoke_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_toggle } from "./list_toggle.mjs";
import { app_shared_bible_chosen_max } from "./app_shared_bible_chosen_max.mjs";
import { list_size_max_skip_replace } from "./list_size_max_skip_replace.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_first_last_slice } from "./list_first_last_slice.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_verse_highlight } from "./app_shared_bible_verse_highlight.mjs";
import { app_shared_bible_copy } from "./app_shared_bible_copy.mjs";
export function app_shared_bible_toggle_update(
  updates,
  verse_numbers_chosen,
  verse_number,
  chapter_code,
  languages_verses,
  component_highlighted,
) {
  function select() {
    toggle();
    invoke_multiple(updates);
  }
  ("A button that says copy has to copy every time it is pressed. Picking and copying are one press on the screen that shows a single verse, and picking is a toggle - so a second press took the verse back off the list and then went to copy a list with nothing in it, which was an error on screen where the reader had asked for the one thing this button is named after. Pressing it when the verse is already picked now leaves the picking alone and copies again.");
  async function choose() {
    let already = list_includes(verse_numbers_chosen, verse_number);
    if (not(already)) {
      select();
    }
    await copy();
  }
  let toggle = function lambda5() {
    list_toggle(verse_numbers_chosen, verse_number);
    let max = app_shared_bible_chosen_max();
    list_size_max_skip_replace(verse_numbers_chosen, max);
  };
  let update = function lambda4() {
    let sliced = null;
    let m = list_multiple_is(verse_numbers_chosen);
    if (m) {
      let verses = list_last_property(languages_verses, "verses");
      let property_name = verse_number_key();
      let verse_numbers = list_map_property(verses, property_name);
      let v = list_first_last_slice(verse_numbers_chosen, verse_numbers);
      sliced = property_get(v, "sliced");
    } else {
      sliced = verse_numbers_chosen;
    }
    app_shared_bible_verse_highlight(
      component_highlighted,
      sliced,
      verse_number,
    );
  };
  let r = {
    toggle,
    update,
    copy,
    select,
    choose,
  };
  async function copy() {
    await app_shared_bible_copy(
      verse_numbers_chosen,
      languages_verses,
      chapter_code,
    );
  }
  return r;
}
