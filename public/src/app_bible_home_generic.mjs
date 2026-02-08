import { app_bible_hash_key_scroll_top } from "../../../love/public/src/app_bible_hash_key_scroll_top.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { html_hash_object_property_set } from "../../../love/public/src/html_hash_object_property_set.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { html_scroll_top_set } from "../../../love/public/src/html_scroll_top_set.mjs";
import { html_scroll_top_get } from "../../../love/public/src/html_scroll_top_get.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_button_copy_text } from "../../../love/public/src/html_button_copy_text.mjs";
import { app_chapter_toggle_update } from "../../../love/public/src/app_chapter_toggle_update.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { html_display_none_or_block } from "../../../love/public/src/html_display_none_or_block.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { text_replace_space_underscore } from "../../../love/public/src/text_replace_space_underscore.mjs";
import { text_lower_to } from "../../../love/public/src/text_lower_to.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { window_open } from "../../../love/public/src/window_open.mjs";
import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { app_bible_chapters } from "../../../love/public/src/app_bible_chapters.mjs";
import { app_bible_chapter_open } from "../../../love/public/src/app_bible_chapter_open.mjs";
import { app_bible_books } from "../../../love/public/src/app_bible_books.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { list_previous_wrap } from "../../../love/public/src/list_previous_wrap.mjs";
import { emoji_arrow_left } from "../../../love/public/src/emoji_arrow_left.mjs";
import { list_next_wrap } from "../../../love/public/src/list_next_wrap.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { ebible_chapter_codes } from "../../../love/public/src/ebible_chapter_codes.mjs";
import { emoji_arrow_right } from "../../../love/public/src/emoji_arrow_right.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { ebible_book_code_to_name } from "../../../love/public/src/ebible_book_code_to_name.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_chapter_code_parse } from "../../../love/public/src/ebible_chapter_code_parse.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_bar_content_padded } from "../../../love/public/src/html_bar_content_padded.mjs";
import { html_on_scroll } from "../../../love/public/src/html_on_scroll.mjs";
export async function app_bible_home_generic(context, lambda$a) {
  let root = html_clear_context(context);
  html_clear(root);
  let bc = html_bar_content_padded(root);
  let content = object_property_get(bc, "content");
  let bar = object_property_get(bc, "bar");
  html_centered(bar);
  let e = ebible_folder_english();
  let hash = html_hash_object_get();
  let n = object_property_exists_not(hash, "c");
  if (n) {
    app_bible_chapter_open(context, hash, "JHN01");
    return;
  }
  let chapter_code = object_property_get(hash, "c");
  let v2 = ebible_chapter_code_parse(chapter_code);
  let chapter_name = object_property_get(v2, "chapter_name");
  let book_code = object_property_get(v2, "book_code");
  let books = await ebible_version_books(e);
  let book_name = ebible_book_code_to_name(books, book_code);
  async function lambda6() {
    await on_arrow(list_previous_wrap);
  }
  let text3 = emoji_arrow_left();
  let component4 = html_button(bar, text3, lambda6);
  function lambda5() {
    app_shared_screen_set(context, app_bible_books);
  }
  let component = html_button(bar, book_name, lambda5);
  function lambda4() {
    app_shared_screen_set(context, app_bible_chapters);
  }
  let component2 = html_button(bar, chapter_name, lambda4);
  let text2 = emoji_arrow_right();
  async function lambda3() {
    await on_arrow(list_next_wrap);
  }
  let component3 = html_button(bar, text2, lambda3);
  function lambda12() {}
  let component7 = html_button(bar, "Languages", lambda12);
  const scroll_top_key = app_bible_hash_key_scroll_top();
  let verses = await ebible_verses(e, chapter_code);
  async function on_arrow(list_next_wrap) {
    let list = await ebible_chapter_codes(e);
    let next = list_next_wrap(list, chapter_code);
    app_bible_chapter_open(context, hash, next);
  }
  let verse_numbers_chosen = [];
  let languages_verses = [];
  let updates = [];
  async function each_verse(v) {
    let verse_number = object_property_get(v, "verse_number");
    let text = object_property_get(v, "text");
    let p_verse = html_p(content);
    let top = html_div(p_verse);
    let bottom = html_div(p_verse);
    html_centered(bottom);
    let hidden = false;
    toggle();
    biblehub_button_open("interlinear/", verse_number, bottom, "Interlinear");
    biblehub_button_open("", verse_number, bottom, "Parallel");
    function lambda8() {}
    let text4 = html_button_copy_text();
    let component6 = html_button(bottom, text4, lambda8);
    let v3 = app_chapter_toggle_update(
      updates,
      component6,
      verse_numbers_chosen,
      verse_number,
      chapter_code,
      languages_verses,
      p_verse,
    );
    let update = object_property_get(v3, "update");
    list_add(updates, update);
    function toggle() {
      hidden = not(hidden);
      html_display_none_or_block(hidden, bottom);
    }
    let verse_number_v_button = html_button(top, verse_number, toggle);
    let split = text_split_space(text);
    function lambda2(item) {
      html_span_space(top);
      let item_span = html_span_text(top, item);
      function lambda9() {
        let letters_only = text_letters_only(item);
        window_open("https://www.google.com/search?q=define:" + letters_only);
      }
      html_on_click(item_span, lambda9);
    }
    each(split, lambda2);
    let p = html_p(content);
    await lambda$a({
      p_verse,
      p,
      chapter_code,
      verse_number,
    });
    return;
  }
  await each_async(verses, each_verse);
  list_add(languages_verses, {
    verses,
    books,
  });
  function biblehub_button_open(folder, verse_number_v, bottom, button_text) {
    function lambda10() {
      let lower = text_lower_to(book_name);
      let replaced = text_replace_space_underscore(lower);
      if (equal(replaced, "song")) {
        replaced = "songs";
      }
      window_open(
        "https://biblehub.com/" +
          folder +
          replaced +
          "/" +
          chapter_name +
          "-" +
          verse_number_v +
          ".htm",
      );
    }
    let component5 = html_button(bottom, button_text, lambda10);
  }
  function on_scroll() {
    let scroll_top = html_scroll_top_get(content);
    html_hash_object_property_set(scroll_top_key, scroll_top);
  }
  html_on_scroll(content, on_scroll);
  let exists = object_property_exists(hash, scroll_top_key);
  if (exists) {
    let value = object_property_get(hash, scroll_top_key);
    html_scroll_top_set(content, value);
  }
  let v4 = {
    bar,
  };
  return v4;
}
