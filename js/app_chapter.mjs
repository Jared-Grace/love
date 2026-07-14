import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { promise_later } from "./promise_later.mjs";
import { html_scroll_center_now } from "./html_scroll_center_now.mjs";
import { list_map_add_async } from "./list_map_add_async.mjs";
import { list_map_unordered_add_async } from "./list_map_unordered_add_async.mjs";
import { app_chapter_toggle_update } from "./app_chapter_toggle_update.mjs";
import { app_chapter_chosen_max } from "./app_chapter_chosen_max.mjs";
import { number_to_words } from "./number_to_words.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
import { html_bar_content_padded } from "./html_bar_content_padded.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_spaced_small } from "./app_shared_spaced_small.mjs";
import { list_first_last } from "./list_first_last.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { app_next_hash_to_languages_chosen } from "./app_next_hash_to_languages_chosen.mjs";
import { property_get } from "./property_get.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_arrows_wide } from "./app_shared_arrows_wide.mjs";
import { app_shared_margin_y_set } from "./app_shared_margin_y_set.mjs";
import { app_chapter_change } from "./app_chapter_change.mjs";
import { list_previous_wrap } from "./list_previous_wrap.mjs";
import { list_next_wrap } from "./list_next_wrap.mjs";
export async function app_chapter(context) {
  let root = html_mobile_default(context);
  html_margin_0(root);
  let bc = html_bar_content_padded(root);
  let content = property_get(bc, "content");
  app_shared_spaced_small(content);
  let bar = property_get(bc, "bar");
  let t = html_button_copy_text();
  let max = app_chapter_chosen_max();
  let p2 = html_p_text(
    bar,
    text_combine_multiple([
      "Choose ",
      number_to_words(max),
      " verses. That will copy all the verses in between (inclusive).",
    ]),
  );
  app_shared_margin_y_set(p2);
  let hash = html_hash_object_get();
  let chapter_code = property_get(hash, "c");
  let verse_number = property_get(hash, "v");
  let languages_chosen = app_next_hash_to_languages_chosen(hash);
  async function chapter_previous() {
    await app_chapter_change(chapter_code, languages_chosen, list_previous_wrap);
  }
  async function chapter_next() {
    await app_chapter_change(chapter_code, languages_chosen, list_next_wrap);
  }
  app_shared_arrows_wide(bar, chapter_previous, chapter_next);
  let verse_numbers_chosen = [];
  let languages_verses = [];
  async function lambda2(lc) {
    let bible_folder = ebible_language_to_bible_folder(lc);
    let verses = await ebible_verses_browser(bible_folder, chapter_code);
    let books = await ebible_version_books_browser(bible_folder);
    let li = list_last_is(languages_chosen, lc);
    if (li) {
      let mapped = list_map_property(verses, "verse_number");
      let fl = list_first_last(mapped);
      let reference = ebible_parts_chapter_code_to_reference(
        chapter_code,
        books,
        fl,
      );
      let reference_p = html_p_text(content, reference);
      html_margin_0(reference_p);
      let updates = [];
      async function lambda(v) {
        let verse_number_v = property_get(v, "verse_number");
        let text = property_get(v, "text");
        let p = html_p_text(
          content,
          text_combine_multiple([verse_number_v, " ", text]),
        );
        html_margin_0(p);
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
  await list_map_unordered_add_async(
    languages_chosen,
    lambda2,
    languages_verses,
  );
}
