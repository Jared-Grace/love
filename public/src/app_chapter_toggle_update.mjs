import { log } from "../../../love/public/src/log.mjs";
import { list_multiple_not_is } from "../../../love/public/src/list_multiple_not_is.mjs";
import { list_join_newline_2_copy } from "../../../love/public/src/list_join_newline_2_copy.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { list_map_find_property } from "../../../love/public/src/list_map_find_property.mjs";
import { list_slice_from } from "../../../love/public/src/list_slice_from.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_first_last } from "../../../love/public/src/list_first_last.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_style_background_color_set_or_remove_list } from "../../../love/public/src/html_style_background_color_set_or_remove_list.mjs";
import { list_replace_all } from "../../../love/public/src/list_replace_all.mjs";
import { list_size_max_skip } from "../../../love/public/src/list_size_max_skip.mjs";
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
) {
  marker("1");
  async function choose() {
    log({});
    toggle();
    invoke_multiple(updates);
    await copy();
  }
  html_on_click(component_clicked, choose);
  let toggle = function lambda5() {
    list_toggle(verse_numbers_chosen, verse_number);
    let max = app_chapter_chosen_max();
    let copy = list_size_max_skip(verse_numbers_chosen, max);
    list_replace_all(verse_numbers_chosen, copy);
  };
  let update = function lambda4() {
    html_style_background_color_set_or_remove_list(
      component_clicked,
      verse_numbers_chosen,
      verse_number,
    );
  };
  let v3 = {
    toggle,
    update,
  };
  async function copy() {
    let n = list_multiple_not_is(verse_numbers_chosen);
    if (n) {
      return;
    }
    list_sort_number_mapper(verse_numbers_chosen, integer_to);
    function lambda3(bv) {
      let books2 = object_property_get(bv, "books");
      let verses2 = object_property_get(bv, "verses");
      let verse_numbers = list_map_property(verses2, "verse_number");
      let v = list_first_last(verse_numbers_chosen);
      let first = list_first(v);
      let last = list_last(v);
      let sliced = list_slice_from(verse_numbers, first, last);
      let mapped2 = list_map_find_property(sliced, verses2, "verse_number");
      let mapped3 = list_map_property(mapped2, "text");
      let reference = ebible_parts_chapter_code_to_reference(
        chapter_code,
        books2,
        [first, last],
      );
      let concated2 = list_concat([reference], mapped3);
      return concated2;
    }
    let m = list_map(languages_verses, lambda3);
    let squashed = list_squash(m);
    let joined = await list_join_newline_2_copy(squashed);
  }
  return v3;
}
