import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_first_last_slice } from "./list_first_last_slice.mjs";
import { list_size_max_skip_replace } from "./list_size_max_skip_replace.mjs";
import { log } from "./log.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { list_squash } from "./list_squash.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { list_map_find_property } from "./list_map_find_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { app_chapter_verse_highlight } from "./app_chapter_verse_highlight.mjs";
import { app_chapter_chosen_max } from "./app_chapter_chosen_max.mjs";
import { list_toggle } from "./list_toggle.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { invoke_multiple } from "./invoke_multiple.mjs";
export function app_chapter_toggle_update(
  updates,
  component_clicked,
  verse_numbers_chosen,
  verse_number,
  chapter_code,
  languages_verses,
  component_highlighted,
) {
  async function choose() {
    log(app_chapter_toggle_update.name, "message");
    toggle();
    invoke_multiple(updates);
    await copy();
  }
  html_on_click(component_clicked, choose);
  let toggle = function lambda5() {
    list_toggle(verse_numbers_chosen, verse_number);
    let max = app_chapter_chosen_max();
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
    app_chapter_verse_highlight(component_highlighted, sliced, verse_number);
  };
  let r = {
    toggle,
    update,
    copy,
  };
  async function copy() {
    await app_chapter_copy(verse_numbers_chosen, languages_verses, chapter_code);
  }
  return r;
}
