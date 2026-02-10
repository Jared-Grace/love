import { promise_later } from "../../../love/public/src/promise_later.mjs";
import { html_scroll_center_now } from "../../../love/public/src/html_scroll_center_now.mjs";
import { list_map_add_async } from "../../../love/public/src/list_map_add_async.mjs";
import { app_chapter_toggle_update } from "../../../love/public/src/app_chapter_toggle_update.mjs";
import { app_chapter_chosen_max } from "../../../love/public/src/app_chapter_chosen_max.mjs";
import { number_to_words } from "../../../love/public/src/number_to_words.mjs";
import { html_button_copy_text } from "../../../love/public/src/html_button_copy_text.mjs";
import { list_last_is } from "../../../love/public/src/list_last_is.mjs";
import { html_margin_0 } from "../../../love/public/src/html_margin_0.mjs";
import { html_bar_content_padded } from "../../../love/public/src/html_bar_content_padded.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { list_first_last } from "../../../love/public/src/list_first_last.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_parts_chapter_code_to_reference } from "../../../love/public/src/ebible_parts_chapter_code_to_reference.mjs";
import { ebible_language_to_bible_folder } from "../../../love/public/src/ebible_language_to_bible_folder.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { app_next_hash_to_languages_chosen } from "../../../love/public/src/app_next_hash_to_languages_chosen.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
export async function app_chapter_main(context) {
  let root = html_mobile_default(context);
  firebase_name_jg();
  html_margin_0(root);
  let bc = html_bar_content_padded(root);
  let content = property_get(bc, "content");
  let bar = property_get(bc, "bar");
  let t = html_button_copy_text();
  let max = app_chapter_chosen_max();
  let p2 = html_p_text(
    bar,
    "Choose " +
      number_to_words(max) +
      " verses. That will copy all the verses in between (inclusive).",
  );
  let hash = html_hash_object_get();
  let chapter_code = property_get(hash, "c");
  let verse_number = property_get(hash, "v");
  let languages_chosen = app_next_hash_to_languages_chosen(hash);
  let verse_numbers_chosen = [];
  let languages_verses = [];
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
      let updates = [];
      async function lambda(v) {
        let verse_number_v = property_get(v, "verse_number");
        let text = property_get(v, "text");
        let p = html_p_text(content, verse_number_v + " " + text);
        let r = app_chapter_toggle_update(
          updates,
          p,
          verse_numbers_chosen,
          verse_number_v,
          chapter_code,
          languages_verses,
          p,
        );
        let update = property_get(r, "update");
        let toggle = property_get(r, "toggle");
        let copy = property_get(r, "copy");
        if (verse_number_v === verse_number) {
          async function lambda4() {
            await html_scroll_center_now(p);
            toggle();
            update();
            await copy();
          }
          promise_later(lambda4);
        }
        return update;
      }
      await list_map_add_async(verses, lambda, updates);
    }
    let v2 = {
      books,
      verses,
    };
    return v2;
  }
  await list_map_add_async(languages_chosen, lambda2, languages_verses);
}
