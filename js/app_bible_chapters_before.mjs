import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { app_bible_screen_content } from "./app_bible_screen_content.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { app_shared_container_blue_medium } from "./app_shared_container_blue_medium.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_bible_hash_v_get } from "./app_bible_hash_v_get.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { property_get } from "./property_get.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function app_bible_chapters_before(context) {
  let opened = await app_bible_screen_content(context);
  let root = property_get(opened, "root");
  let content = property_get(opened, "content");
  let e = ebible_folder_english();
  let hash = html_hash_object_get();
  let property_name = app_shared_bible_chapter_hash_key();
  let chapter_code = property_get(hash, property_name);
  let verse_number = app_bible_hash_v_get(hash);
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let books = await ebible_version_books_browser(e);
  let book_name = ebible_book_code_to_name(books, book_code);
  ("hold the choices in a medium-blue card, matching the book picker's section cards");
  let card = app_shared_container_blue_medium(content);
  ("trim the card's left-right padding to match the book-section cards, giving the number buttons more of the row width");
  let pad_x = app_shared_spaced_tiny_gap();
  html_style_padding_x(card, pad_x);
  let book_div = html_div_text_centered(card, book_name);
  ("color the heading in the deep blue of the cards, not gray");
  let color = app_shared_color_blue_dark();
  html_font_color_set(book_div, color);
  let r = {
    book_code,
    root,
    card,
    verse_number,
    chapter_code,
  };
  return r;
}
