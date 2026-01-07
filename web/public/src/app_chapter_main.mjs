import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { list_size_max_skip } from "../../../love/public/src/list_size_max_skip.mjs";
import { number_to_words } from "../../../love/public/src/number_to_words.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { html_button_copy_text } from "../../../love/public/src/html_button_copy_text.mjs";
import { list_last_is } from "../../../love/public/src/list_last_is.mjs";
import { html_margin_0 } from "../../../love/public/src/html_margin_0.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_map_find_property } from "../../../love/public/src/list_map_find_property.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_slice_from } from "../../../love/public/src/list_slice_from.mjs";
import { html_button_copy_width_full } from "../../../love/public/src/html_button_copy_width_full.mjs";
import { html_display_none_or_block } from "../../../love/public/src/html_display_none_or_block.mjs";
import { html_bar_content } from "../../../love/public/src/html_bar_content.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { html_style_background_color_set_or_remove_list } from "../../../love/public/src/html_style_background_color_set_or_remove_list.mjs";
import { list_toggle } from "../../../love/public/src/list_toggle.mjs";
import { html_on_pointerdown } from "../../../love/public/src/html_on_pointerdown.mjs";
import { html_scroll_center_now } from "../../../love/public/src/html_scroll_center_now.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { list_first_last } from "../../../love/public/src/list_first_last.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { ebible_language_to_bible_folder } from "../../../love/public/src/ebible_language_to_bible_folder.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { app_next_hash_to_languages_chosen } from "../../../love/public/src/app_next_hash_to_languages_chosen.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
export async function app_chapter_main(context) {
  marker("1");
  let root = html_mobile_default(context);
  html_margin_0(root);
  let bc = html_bar_content(root);
  let content = object_property_get(bc, "content");
  let bar = object_property_get(bc, "bar");
  let t = html_button_copy_text();
  let max = 2;
  let p2 = html_p_text(
    bar,
    "Choose " +
      number_to_words(max) +
      " verses. Then choose " +
      t +
      " to copy all the verses in between (inclusive).",
  );
  let cb = html_button_copy_width_full(bar, copy);
  firebase_name_jg();
  let hash = html_hash_object_get();
  let chapter_code = object_property_get(hash, "c");
  let verse_number = object_property_get(hash, "v");
  let languages_chosen = app_next_hash_to_languages_chosen(hash);
  let verse_numbers_chosen = [];
  async function lambda2(lc) {
    let bible_folder = ebible_language_to_bible_folder(lc);
    let verses = await ebible_verses(bible_folder, chapter_code);
    let books = await ebible_version_books(bible_folder);
    let li = list_last_is(languages_chosen, lc);
    if (li) {
      let mapped = list_map_property(verses, "verse_number");
      let fl = list_first_last(mapped);
      let reference = ebible_parts_chapter_code_to_reference(
        chapter_code,
        books,
        fl,
      );
      html_p_text(content, reference);
      let updates = null;
      async function lambda(v) {
        let verse_number_v = object_property_get(v, "verse_number");
        let text = object_property_get(v, "text");
        let p = html_p_text(content, verse_number_v + " " + text);
        if (verse_number_v === verse_number) {
          await html_scroll_center_now(p);
          toggle();
          update();
        }
        function choose() {
          toggle();
          invoke_multiple(updates);
        }
        html_on_pointerdown(p, choose);
        function toggle() {
          list_toggle(verse_numbers_chosen, verse_number_v);
          verse_numbers_chosen = list_size_max_skip(verse_numbers_chosen, max);
        }
        function update() {
          html_style_background_color_set_or_remove_list(
            p,
            verse_numbers_chosen,
            verse_number_v,
          );
          let m = list_multiple_is(verse_numbers_chosen);
          let hidden = not(m);
          html_display_none_or_block(hidden, cb);
        }
        return update;
      }
      updates = await list_map_async(verses, lambda);
    }
    let v2 = {
      books,
      verses,
    };
    return v2;
  }
  let languages_verses = await list_map_async(languages_chosen, lambda2);
  async function copy() {
    list_sort_number_mapper(verse_numbers_chosen, integer_to);
    function lambda3(bv) {
      let books2 = object_property_get(bv, "books");
      let verses2 = object_property_get(bv, "verses");
      let verse_numbers = list_map_property(verses2, "verse_number");
      let v = list_first_last(verse_numbers_chosen);
      let last = list_first(v);
      let first = list_last(v);
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
}
