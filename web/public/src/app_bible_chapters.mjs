import { each } from "../../../love/public/src/each.mjs";
import { html_div_text_centered } from "../../../love/public/src/html_div_text_centered.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_book_code_to_name } from "../../../love/public/src/ebible_book_code_to_name.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_filter_prefix_without } from "../../../love/public/src/list_filter_prefix_without.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_chapter_codes } from "../../../love/public/src/ebible_chapter_codes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_bible_chapters(context) {
  marker("1");
  let root = html_clear_context(context);
  let e = ebible_folder_english();
  let list = await ebible_chapter_codes(e);
  let hash = html_hash_object_get();
  let chapter_code = object_property_get(hash, "c");
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let mapped = list_filter_prefix_without(list, book_code);
  let mapped2 = list_map(mapped, integer_to);
  let books = await ebible_version_books(e);
  let book_name = ebible_book_code_to_name(books, book_code);
  html_div_text_centered(root, book_name);
  function lambda(item) {}
  each(list2, lambda);
  log({
    mapped2,
  });
}
