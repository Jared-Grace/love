import { ebible_book_code_to_chapter_codes } from "../../../love/public/src/ebible_book_code_to_chapter_codes.mjs";
import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_bible_chapter_open } from "../../../love/public/src/app_bible_chapter_open.mjs";
import { ebible_chapter_code_to_name } from "../../../love/public/src/ebible_chapter_code_to_name.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_div_text_centered } from "../../../love/public/src/html_div_text_centered.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_book_code_to_name } from "../../../love/public/src/ebible_book_code_to_name.mjs";
import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { log } from "../../../love/public/src/log.mjs";
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
  let chapter_codes = await ebible_book_code_to_chapter_codes(e, book_code);
  let mapped = list_map_prefix_without(chapter_codes, book_code);
  let chapter_numbers = list_map(mapped, integer_to_try);
  let books = await ebible_version_books(e);
  let book_name = ebible_book_code_to_name(books, book_code);
  html_div_text_centered(root, book_name);
  let div = html_div(root);
  html_centered(div);
  function lambda(chapter_code) {
    let chapter_name = ebible_chapter_code_to_name(chapter_code);
    function lambda3() {
      app_bible_chapter_open(context, hash, chapter_code);
    }
    let component = html_button(div, chapter_name, lambda3);
  }
  each(chapter_codes, lambda);
  log({
    mapped2: chapter_numbers,
  });
}
