import { app_shared_column_max_width } from "./app_shared_column_max_width.mjs";
import { app_shared_content_center_padding } from "./app_shared_content_center_padding.mjs";
import { app_shared_container_blue_medium } from "./app_shared_container_blue_medium.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_bible_button_back_to_reader } from "./app_bible_button_back_to_reader.mjs";
import { app_bible_hash_v_get } from "./app_bible_hash_v_get.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { property_get } from "./property_get.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
export async function app_bible_chapters_before(context) {
  let root = html_clear_context(context);
  ("give the chapter and verse pickers the same left-right breathing room as the reader and the book picker");
  let column = app_shared_column_max_width();
  app_shared_content_center_padding(root, column);
  await app_bible_button_back_to_reader(root, context);
  let e = ebible_folder_english();
  let hash = html_hash_object_get();
  let chapter_code = property_get(hash, "c");
  let verse_number = app_bible_hash_v_get(hash);
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let books = await ebible_version_books_browser(e);
  let book_name = ebible_book_code_to_name(books, book_code);
  ("hold the choices in a medium-blue card, matching the book picker's section cards");
  let card = app_shared_container_blue_medium(root);
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
