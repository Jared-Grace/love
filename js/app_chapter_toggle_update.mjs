import { list_last } from "../../love/js/list_last.mjs";
import { list_multiple_is } from "../../love/js/list_multiple_is.mjs";
import { list_first_last_slice } from "../../love/js/list_first_last_slice.mjs";
import { list_size_max_skip_replace } from "../../love/js/list_size_max_skip_replace.mjs";
import { list_map_property } from "../../love/js/list_map_property.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { app_chapter_copy } from "../../love/js/app_chapter_copy.mjs";
import { app_shared_bible_verse_highlight } from "../../love/js/app_shared_bible_verse_highlight.mjs";
import { app_shared_bible_chosen_max } from "../../love/js/app_shared_bible_chosen_max.mjs";
import { list_toggle } from "../../love/js/list_toggle.mjs";
import { invoke_multiple } from "../../love/js/invoke_multiple.mjs";
export function app_chapter_toggle_update(
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
  async function choose() {
    select();
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
      let l = list_last(languages_verses);
      let verses = property_get(l, "verses");
      let verse_numbers = list_map_property(verses, "verse_number");
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
    await app_chapter_copy(
      verse_numbers_chosen,
      languages_verses,
      chapter_code,
    );
  }
  return r;
}
