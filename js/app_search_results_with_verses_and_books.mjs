import { arguments_assert } from "./arguments_assert.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_book_exists } from "./ebible_book_exists.mjs";
export function app_search_results_with_verses_and_books(dictionary, books) {
  arguments_assert(arguments, 2);
  let results_all = object_to_list(dictionary);
  function result_verses_exist(vk) {
    "a chapter can hold every query word and still have no single verse holding them all, so the verse intersection comes back empty";
    let e = property_list_empty_not_is(vk, "value");
    return e;
  }
  let results_verses = list_filter(results_all, result_verses_exist);
  function result_book_exists(vk) {
    let chapter_code = property_get(vk, "key");
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let e = ebible_book_exists(books, book_code);
    return e;
  }
  let results = list_filter(results_verses, result_book_exists);
  return results;
}
