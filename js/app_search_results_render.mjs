import { app_search_results_top_buttons } from "./app_search_results_top_buttons.mjs";
import { app_search_results_bible_order_key } from "./app_search_results_bible_order_key.mjs";
import { app_search_results_division_card } from "./app_search_results_division_card.mjs";
import { app_search_results_book_card } from "./app_search_results_book_card.mjs";
import { app_search_results_chapter_card } from "./app_search_results_chapter_card.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_collapse_setters_set } from "./app_shared_collapse_setters_set.mjs";
import { app_search_results_collect_all_texts } from "./app_search_results_collect_all_texts.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
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
  let button_list = null;
  (
    "the two levels of card are kept as two groups rather than one, because the buttons do not act on both: opening acts on the sections and the books, shutting only on the books. Held apart, each button can also switch itself off at the right moment - shutting has something to do while any BOOK is open, whatever the sections are doing"
  );
  let book_folds = app_shared_folds();
  let testament_folds = app_shared_folds();
  async function expand_all_lambda() {
    "open the book cards first: on a page long enough to scroll they start collapsed, so filling in the verses inside them changes nothing the reader can see, and the button reads as broken. opening them costs no waiting, so it lands before the verse texts are fetched and the reader watches them arrive";
    "the testament cards open ahead of the books inside them, since a reader who folded one away would otherwise press this and watch nothing happen there";
    app_shared_folds_set(testament_folds, false);
    app_shared_folds_set(book_folds, false);
    let squashed = await app_search_results_collect_all_texts(button_list);
    return squashed;
  }
  function collapse_all_lambda() {
    "shut every book card, the way back from having opened them all. it stays out of the reader's way rather than replacing the opening button, because a reader can also open and shut single books, so neither action is ever the only sensible one. nothing is thrown away - the verse texts already fetched are still there when a card opens again";
    "the testament cards stay as the reader left them: shutting those too would hide the very overview of books this button exists to come back to";
    app_shared_folds_set(book_folds, true);
  }
  async function copy_all_lambda() {
    "copying is opening and then taking a copy of what was opened: the reader is left looking at the very verses now on their clipboard, so they can see what they have got rather than trust that something happened. It is the opening button's own work, called rather than written again, so the two can never come to open different things";
    let squashed = await expand_all_lambda();
    await list_join_newline_2_copy(squashed);
  }
  ("the three buttons stand in one row, so each wears a picture for the same reason the copying one always has: a reader picks the one they want by its picture before they have read any of the words");
  let folds_expand = [testament_folds, book_folds];
  let folds_collapse = [book_folds];
  app_search_results_top_buttons(
    div_results,
    expand_all_lambda,
    collapse_all_lambda,
    copy_all_lambda,
    folds_expand,
    folds_collapse,
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
  button_list = list_squash(button_lists);
  let r = {
    button_list,
    book_folds,
    book_chapter_single_expanders,
  };
  return r;
}
