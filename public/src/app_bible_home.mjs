import { html_on_pointerdown } from "../../../love/public/src/html_on_pointerdown.mjs";
import { string_letters_only } from "../../../love/public/src/string_letters_only.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
import { string_split_space } from "../../../love/public/src/string_split_space.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { app_bible_chapters } from "../../../love/public/src/app_bible_chapters.mjs";
import { app_bible_chapter_open } from "../../../love/public/src/app_bible_chapter_open.mjs";
import { app_bible_books } from "../../../love/public/src/app_bible_books.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
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
import { html_bar_content } from "../../../love/public/src/html_bar_content.mjs";
import { html_margin_0 } from "../../../love/public/src/html_margin_0.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_bible_home(context) {
  marker("1");
  let root = html_mobile_default(context);
  html_clear(root);
  html_margin_0(root);
  let bc = html_bar_content(root);
  let content = object_property_get(bc, "content");
  let bar = object_property_get(bc, "bar");
  html_centered(bar);
  let e = ebible_folder_english();
  let hash = html_hash_object_get();
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
    app_generic_screen_set(context, app_bible_books);
  }
  let component = html_button(bar, book_name, lambda5);
  function lambda4() {
    app_generic_screen_set(context, app_bible_chapters);
  }
  let component2 = html_button(bar, chapter_name, lambda4);
  let text2 = emoji_arrow_right();
  async function lambda3() {
    await on_arrow(list_next_wrap);
  }
  let component3 = html_button(bar, text2, lambda3);
  let verses = await ebible_verses(e, chapter_code);
  async function on_arrow(list_next_wrap) {
    let list = await ebible_chapter_codes(e);
    let next = list_next_wrap(list, chapter_code);
    app_bible_chapter_open(context, hash, next);
  }
  function lambda(v) {
    let verse_number_v = object_property_get(v, "verse_number");
    let text = object_property_get(v, "text");
    function lambda7() {}
    let p = html_p(content);
    let component5 = html_button(p, verse_number_v, lambda7);
    let split = string_split_space(text);
    function lambda2(item) {
      html_span_space(p);
      let item_span = html_span_text(p, item);
      function lambda9() {
        let letters = string_letters_only(item);
      }
      html_on_pointerdown(item_span, lambda9);
    }
    each(list2, lambda2);
  }
  each(verses, lambda);
}
