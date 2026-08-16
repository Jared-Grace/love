import { app_search_results_book_card } from "./app_search_results_book_card.mjs";
import { app_search_results_chapter_card } from "./app_search_results_chapter_card.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_search_results_collapse_setters_set } from "./app_search_results_collapse_setters_set.mjs";
import { app_search_results_collect_all_texts } from "./app_search_results_collect_all_texts.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { emoji_triangle_down } from "./emoji_triangle_down.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { emoji_triangle_up } from "./emoji_triangle_up.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
import { html_br_2 } from "./html_br_2.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_book_code_to_division_index } from "./ebible_book_code_to_division_index.mjs";
import { number_pad } from "./number_pad.mjs";
import { list_index_of_property } from "./list_index_of_property.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_sort_text_mapper } from "./list_sort_text_mapper.mjs";
import { property_list_size } from "./property_list_size.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
import { ebible_book_code_to_division } from "./ebible_book_code_to_division.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { app_shared_container_blue_collapsible } from "./app_shared_container_blue_collapsible.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_container_blue_medium_titled } from "./app_shared_container_blue_medium_titled.mjs";
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
  async function expand_all_lambda() {
    "open the book cards first: on a page long enough to scroll they start collapsed, so filling in the verses inside them changes nothing the reader can see, and the button reads as broken. opening them costs no waiting, so it lands before the verse texts are fetched and the reader watches them arrive";
    "the testament cards open ahead of the books inside them, since a reader who folded one away would otherwise press this and watch nothing happen there";
    app_search_results_collapse_setters_set(testament_collapse_setters, false);
    app_search_results_collapse_setters_set(book_collapse_setters, false);
    await app_search_results_collect_all_texts(button_list);
  }
  function collapse_all_lambda() {
    "shut every book card, the way back from having opened them all. it stays out of the reader's way rather than replacing the opening button, because a reader can also open and shut single books, so neither action is ever the only sensible one. nothing is thrown away - the verse texts already fetched are still there when a card opens again";
    "the testament cards stay as the reader left them: shutting those too would hide the very overview of books this button exists to come back to";
    app_search_results_collapse_setters_set(book_collapse_setters, true);
  }
  async function copy_all_lambda() {
    "let the reader copy every matching verse in one click, without first expanding them all on screen";
    let squashed = await app_search_results_collect_all_texts(button_list);
    await list_join_newline_2_copy(squashed);
  }
  ("the three buttons stand in one row, so each wears a picture for the same reason the copying one always has: a reader picks the one they want by its picture before they have read any of the words");
  let down = emoji_triangle_down();
  let expand_all_text = text_combine(down, " Expand all");
  app_shared_button_wide(div_results, expand_all_text, expand_all_lambda);
  let up = emoji_triangle_up();
  let collapse_all_text = text_combine(up, " Collapse all");
  app_shared_button_wide(div_results, collapse_all_text, collapse_all_lambda);
  let left = html_button_copy_text();
  app_shared_button_wide_text_combine(
    div_results,
    left,
    " all",
    copy_all_lambda,
  );
  html_br_2(div_results);
  function bible_order_key(vk) {
    "the genre section comes before the book so every section stays one unbroken run, which is what lets a section card be opened as the results cross into it; for the 66-book canon that is the canonical order anyway, since each section is a contiguous run of it";
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
  list_sort_text_mapper(results, bible_order_key);
  function result_verses_count(vk) {
    let count = property_list_size(vk, "value");
    return count;
  }
  let div_books = html_div_centered(div_results);
  ("the two places the page keeps as it walks down the results - which book card is open, and which section card that book belongs in - are each held on an object rather than under names of their own. Both are written in one function and read in another, and a plain name would hand each of those functions its own copy the moment they were ever pulled apart, so the reader would go on filling in the card that was open several books ago. Setting something on an object changes the one thing they are both looking at, so they stay agreed however the code around them is divided up.");
  let book_current = {};
  let book_collapse_setters = [];
  let testament_collapse_setters = [];
  let book_chapter_single_expanders = [];
  let division_current = {};
  function book_group_div(book_code) {
    "which section card this book's own card belongs in, nesting the results the same way choosing a book does: a testament card holding section cards holding the books. the results arrive sorted by section, so crossing into a new one is exactly when its card is opened - no card is opened twice and none is opened for a section nothing matched";
    let division = ebible_book_code_to_division(book_code);
    let testament_name = property_get(division, "testament");
    let division_name = property_get(division, "name");
    let testament_same = equal(testament_name, division_current.testament_name);
    if (not(testament_same)) {
      division_current.testament_name = testament_name;
      division_current.division_name = null;
      let collapsible = app_shared_container_blue_collapsible(
        div_books,
        testament_name,
      );
      division_current.testament_body = property_get(collapsible, "body");
      let testament_collapsed_set = property_get(collapsible, "collapsed_set");
      list_add(testament_collapse_setters, testament_collapsed_set);
    }
    let division_same = equal(division_name, division_current.division_name);
    if (not(division_same)) {
      division_current.division_name = division_name;
      division_current.division_body = app_shared_container_blue_medium_titled(
        division_current.testament_body,
        division_name,
      );
    }
    let r3 = division_current.division_body;
    return r3;
  }
  function book_card_add(book_code) {
    let r2 = app_search_results_book_card(
      book_code,
      book_current,
      book_group_div,
      books,
      results,
      result_verses_count,
      book_collapse_setters,
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
    book_collapse_setters,
    book_chapter_single_expanders,
  };
  return r;
}
