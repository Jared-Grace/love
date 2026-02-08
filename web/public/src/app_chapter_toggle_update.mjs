import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { list_first_last_slice } from "../../../love/public/src/list_first_last_slice.mjs";
import { list_size_max_skip_replace } from "../../../love/public/src/list_size_max_skip_replace.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_join_newline_2_copy } from "../../../love/public/src/list_join_newline_2_copy.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { list_map_find_property } from "../../../love/public/src/list_map_find_property.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { html_style_background_color_set_or_remove_list } from "../../../love/public/src/html_style_background_color_set_or_remove_list.mjs";
import { app_chapter_chosen_max } from "../../../love/public/src/app_chapter_chosen_max.mjs";
import { list_toggle } from "../../../love/public/src/list_toggle.mjs";
import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
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
    log("message");
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
      let verses = object_property_get(l, "verses");
      let verse_numbers = list_map_property(verses, "verse_number");
      let v = list_first_last_slice(verse_numbers_chosen, verse_numbers);
      sliced = object_property_get(v, "sliced");
    } else {
      sliced = verse_numbers_chosen;
    }
    html_style_background_color_set_or_remove_list(
      component_highlighted,
      sliced,
      verse_number,
    );
  };
  let r = {
    toggle,
    update,
    copy,
  };
  async function copy() {
    list_sort_number_mapper(verse_numbers_chosen, integer_to_try);
    function lambda3(bv) {
      log({
        languages_verses,
      });
      let m = list_multiple_is(verse_numbers_chosen);
      let verse_numbers_chosen_normalized = null;
      if (m) {
        verse_numbers_chosen_normalized = verse_numbers_chosen;
      } else {
        let f = list_first(verse_numbers_chosen);
        verse_numbers_chosen_normalized = [f, f];
      }
      let verse_numbers_mapped = null;
      let books = object_property_get(bv, "books");
      let verses = object_property_get(bv, "verses");
      let verse_numbers = list_map_property(verses, "verse_number");
      let v = list_first_last_slice(
        verse_numbers_chosen_normalized,
        verse_numbers,
      );
      let last = object_property_get(v, "last");
      let function_copy_replace_first = object_property_get(v, "first");
      let sliced = object_property_get(v, "sliced");
      verse_numbers_mapped = list_map_find_property(
        sliced,
        verses,
        "verse_number",
      );
      let mapped3 = list_map_property(verse_numbers_mapped, "text");
      let reference = ebible_parts_chapter_code_to_reference(
        chapter_code,
        books,
        [function_copy_replace_first, last],
      );
      let concated2 = list_concat([reference], mapped3);
      return concated2;
    }
    let m = list_map(languages_verses, lambda3);
    let squashed = list_squash(m);
    let joined = await list_join_newline_2_copy(squashed);
  }
  return r;
}
