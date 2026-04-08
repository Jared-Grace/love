import { html_div_centered } from "../../../love/public/src/html_div_centered.mjs";
import { html_button_list } from "../../../love/public/src/html_button_list.mjs";
import { app_bible_chapter_open_curried_2 } from "../../../love/public/src/app_bible_chapter_open_curried_2.mjs";
import { ebible_book_code_to_chapter_codes_browser } from "../../../love/public/src/ebible_book_code_to_chapter_codes_browser.mjs";
import { ebible_version_books_browser } from "../../../love/public/src/ebible_version_books_browser.mjs";
import { ebible_chapter_code_to_name } from "../../../love/public/src/ebible_chapter_code_to_name.mjs";
import { html_div_text_centered } from "../../../love/public/src/html_div_text_centered.mjs";
import { ebible_book_code_to_name } from "../../../love/public/src/ebible_book_code_to_name.mjs";
import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
export async function app_bible_chapters(context) {
  let root = html_clear_context(context);
  let e = ebible_folder_english();
  let hash = html_hash_object_get();
  let chapter_code = property_get(hash, "c");
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let books = await ebible_version_books_browser(e);
  let book_name = ebible_book_code_to_name(books, book_code);
  html_div_text_centered(root, book_name);
  let div = html_div_centered(root);
  let items = await ebible_book_code_to_chapter_codes_browser(e, book_code);
  let code_to_button_text = ebible_chapter_code_to_name;
  let oc = app_bible_chapter_open_curried_2(context, hash);
  let mapped = html_button_list(div, items, code_to_button_text, oc);
  return mapped;
}
