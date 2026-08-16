import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_book_code_to_division_index } from "./ebible_book_code_to_division_index.mjs";
import { number_pad } from "./number_pad.mjs";
import { list_index_of_property } from "./list_index_of_property.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_search_results_bible_order_key(vk, books) {
  arguments_assert(arguments, 2);
  ("the genre section comes before the book so every section stays one unbroken run, which is what lets a section card be opened as the results cross into it; for the 66-book canon that is the canonical order anyway, since each section is a contiguous run of it");
  let chapter_code = property_get(vk, "key");
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let division_index = ebible_book_code_to_division_index(book_code);
  let division_index_padded = number_pad(division_index, 2);
  let book_index = list_index_of_property(books, "book_code", book_code);
  let book_index_padded = number_pad(book_index, 2);
  let key = text_combine_multiple([
    division_index_padded,
    "-",
    book_index_padded,
    "-",
    chapter_code,
  ]);
  return key;
}
