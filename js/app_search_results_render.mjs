import { app_search_results_top_buttons_add } from "./app_search_results_top_buttons_add.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_folds } from "./app_shared_folds.mjs";
import { app_search_results_bible_order_key } from "./app_search_results_bible_order_key.mjs";
import { app_search_results_division_card } from "./app_search_results_division_card.mjs";
import { app_search_results_book_card } from "./app_search_results_book_card.mjs";
import { app_search_results_chapter_card } from "./app_search_results_chapter_card.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_sort_text_mapper } from "./list_sort_text_mapper.mjs";
import { property_list_size } from "./property_list_size.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
import { list_map } from "./list_map.mjs";
import { list_squash } from "./list_squash.mjs";
export function app_search_results_render(
  div_results,
  books,
  results,
  languages_chosen,
) {
  arguments_assert(arguments, 4);
  ("the buttons stand above cards that do not exist yet, so what they act on is set on an object here and filled in at the foot of this function - a plain name would hand the buttons the nothing it held at the moment they were drawn");
  let buttons = {
    list: null,
  };
  ("the two levels of card are kept as two groups rather than one, because the buttons do not act on both: opening acts on the sections and the books, shutting only on the books. Held apart, each button can also switch itself off at the right moment - shutting has something to do while any BOOK is open, whatever the sections are doing");
  let book_folds = app_shared_folds();
  let testament_folds = app_shared_folds();
  app_search_results_top_buttons_add(
    div_results,
    book_folds,
    testament_folds,
    buttons,
  );
  function bible_order_key(vk) {
    let r3 = app_search_results_bible_order_key(vk, books);
    return r3;
  }
  list_sort_text_mapper(results, bible_order_key);
  function result_verses_count(vk) {
    let count = property_list_size(vk, "value");
    return count;
  }
  let div_books = html_div_centered(div_results);
  ("the two places the page keeps as it walks down the results - which book card is open, and which section card that book belongs in - are each held on an object rather than under names of their own. Both are written in one function and read in another, and a plain name would hand each of those functions its own copy the moment they were ever pulled apart, so the reader would go on filling in the card that was open several books ago. Setting something on an object changes the one thing they are both looking at, so they stay agreed however the code around them is divided up.");
  let book_current = {};
  let book_chapter_single_expanders = [];
  let division_current = {};
  function book_group_div(book_code) {
    let r5 = app_search_results_division_card(
      book_code,
      division_current,
      div_books,
      testament_folds,
    );
    return r5;
  }
  function book_card_add(book_code) {
    let r2 = app_search_results_book_card(
      book_code,
      book_current,
      book_group_div,
      books,
      results,
      result_verses_count,
      book_folds,
      book_chapter_single_expanders,
    );
    return r2;
  }
  function each_result(vk) {
    let r4 = app_search_results_chapter_card(
      vk,
      book_card_add,
      book_current,
      books,
      languages_chosen,
    );
    return r4;
  }
  let button_lists = list_map(results, each_result);
  let button_list = list_squash(button_lists);
  property_set(buttons, "list", button_list);
  let r = {
    button_list,
    book_folds,
    book_chapter_single_expanders,
  };
  return r;
}
