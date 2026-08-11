import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export function app_search_results_book_verses_count(
  book_code,
  results,
  result_verses_count,
) {
  arguments_assert(arguments, 3);
  ("how many verses a book card is holding, which the card says out loud so the reader can weigh a book before opening it");
  function belongs(vk) {
    let chapter_code = property_get(vk, "key");
    let vk_book_code = ebible_chapter_code_to_book(chapter_code);
    let e = equal(vk_book_code, book_code);
    return e;
  }
  let mine = list_filter(results, belongs);
  let total = list_map_sum(mine, result_verses_count);
  return total;
}
