import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_slice_from } from "../../../love/public/src/list_slice_from.mjs";
import { html_button_copy_width_full } from "../../../love/public/src/html_button_copy_width_full.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { html_display_none_or_block } from "../../../love/public/src/html_display_none_or_block.mjs";
import { html_bar_content } from "../../../love/public/src/html_bar_content.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { html_style_background_color_set_or_remove_list } from "../../../love/public/src/html_style_background_color_set_or_remove_list.mjs";
import { list_toggle } from "../../../love/public/src/list_toggle.mjs";
import { html_on_pointerdown } from "../../../love/public/src/html_on_pointerdown.mjs";
import { html_scroll_center_now } from "../../../love/public/src/html_scroll_center_now.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { list_first_last } from "../../../love/public/src/list_first_last.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { ebible_language_to_bible_folder } from "../../../love/public/src/ebible_language_to_bible_folder.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { app_next_hash_to_languages_chosen } from "../../../love/public/src/app_next_hash_to_languages_chosen.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_chapter_main(context) {
  marker("1");
  let root = html_mobile_default(context);
  let bc = html_bar_content(root);
  let content = object_property_get(bc, "content");
  let bar = object_property_get(bc, "bar");
  html_button_copy_width_full(bar, copy);
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
    let mapped = list_map_property(verses, "verse_number");
    let fl = list_first_last(mapped);
    let reference = ebible_parts_chapter_code_to_reference(
      chapter_code,
      books,
      fl,
    );
    html_p_text(content, reference);
    async function lambda(v) {
      let verse_number_v = object_property_get(v, "verse_number");
      let text = object_property_get(v, "text");
      let p = html_p_text(content, verse_number_v + " " + text);
      if (verse_number_v === verse_number) {
        await html_scroll_center_now(p);
        choose();
      }
      function choose() {
        list_toggle(verse_numbers_chosen, verse_number_v);
        html_style_background_color_set_or_remove_list(
          p,
          verse_numbers_chosen,
          verse_number_v,
        );
        let e = list_empty_is(verse_numbers_chosen);
        html_display_none_or_block(e, bar);
      }
      html_on_pointerdown(p, choose);
    }
    each(verses, lambda);
  }
  await each_async(languages_chosen, lambda2);
  function copy() {
    let v = list_first_last(verse_numbers_chosen);
    let last = list_first(v);
    let first = list_last(v);
    let sliced = list_slice_from(list, first, last);
    log({
      sliced,
    });
  }
}
