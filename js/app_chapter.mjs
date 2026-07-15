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
import { html_p_text } from "./html_p_text.mjs";
import { html_p } from "./html_p.mjs";
import { html_div } from "./html_div.mjs";
import { app_bible_on_click_google_define } from "./app_bible_on_click_google_define.mjs";
import { noop } from "./noop.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { app_chapter_copy } from "./app_chapter_copy.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { html_flex_column_gap } from "./html_flex_column_gap.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { app_next_hash_to_languages_chosen } from "./app_next_hash_to_languages_chosen.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_replace_button_arrow_left } from "./app_replace_button_arrow_left.mjs";
import { app_replace_button_arrow_right } from "./app_replace_button_arrow_right.mjs";
import { app_chapter_languages_gear } from "./app_chapter_languages_gear.mjs";
import { app_chapter_book_chapter } from "./app_chapter_book_chapter.mjs";
import { html_display_grid } from "./html_display_grid.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_number_gutter } from "./app_shared_number_gutter.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_last } from "./list_last.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_margin_y_set } from "./app_shared_margin_y_set.mjs";
import { app_chapter_change } from "./app_chapter_change.mjs";
import { list_previous_wrap } from "./list_previous_wrap.mjs";
import { list_next_wrap } from "./list_next_wrap.mjs";
export async function app_chapter(context) {
  let root = html_mobile_default(context);
  html_margin_0(root);
  let bc = html_bar_content_padded(root);
  let content = property_get(bc, "content");
  html_flex_column_gap(content, "0");
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
  let chapter_code = property_get_or(hash, "c", "JHN01");
  let verse_number = property_get_or(hash, "v", "");
  let languages_chosen = app_next_hash_to_languages_chosen(hash);
  html_centered(bar);
  async function chapter_previous() {
    await app_chapter_change(chapter_code, languages_chosen, list_previous_wrap);
  }
  async function chapter_next() {
    await app_chapter_change(chapter_code, languages_chosen, list_next_wrap);
  }
  let primary_folder = ebible_language_to_bible_folder(
    list_last(languages_chosen),
  );
  let books = await ebible_version_books_browser(primary_folder);
  app_replace_button_arrow_left(bar, chapter_previous);
  app_chapter_book_chapter(bar, content, chapter_code, books, primary_folder);
  app_replace_button_arrow_right(bar, chapter_next);
  app_chapter_languages_gear(bar, content, languages_chosen);
  let verse_numbers_chosen = [];
  let languages_verses = [];
  async function copy_selection() {
    await app_chapter_copy(verse_numbers_chosen, languages_verses, chapter_code);
  }
  app_replace_button(bar, t, copy_selection);
  async function lambda2(lc) {
    let bible_folder = ebible_language_to_bible_folder(lc);
    let verses = await ebible_verses_browser(bible_folder, chapter_code);
    let books = await ebible_version_books_browser(bible_folder);
    let li = list_last_is(languages_chosen, lc);
    if (li) {
      let updates = [];
      async function lambda(v) {
        let verse_number_v = property_get(v, "verse_number");
        let text = property_get(v, "text");
        let p = html_p(content);
        html_display_grid(p);
        let columns = text_combine(app_shared_number_gutter(), " 1fr");
        html_style_set(p, "grid-template-columns", columns);
        let number = app_replace_button(p, verse_number_v, noop);
        html_style_set(number, "justify-self", "end");
        let text_cell = html_div(p);
        app_bible_on_click_google_define(text_cell, text);
        html_margin_0(p);
        html_style_padding_y(p, app_shared_spaced_tiny_gap());
        html_style_padding_x(p, app_shared_spaced_tiny_gap());
        let r = app_chapter_toggle_update(
          updates,
          verse_numbers_chosen,
          verse_number_v,
          chapter_code,
          languages_verses,
          p,
        );
        let select = property_get(r, "select");
        html_on_click(number, select);
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
