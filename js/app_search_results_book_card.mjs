import { app_shared_folds_setter_add } from "./app_shared_folds_setter_add.mjs";
import { app_search_results_book_card_header } from "./app_search_results_book_card_header.mjs";
import { app_search_results_chapters_single_expand } from "./app_search_results_chapters_single_expand.mjs";
import { app_search_results_book_card_collapsed_set } from "./app_search_results_book_card_collapsed_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
import { not } from "./not.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { list_add } from "./list_add.mjs";
export function app_search_results_book_card(
  book_code,
  book_current,
  book_group_div,
  books,
  results,
  result_verses_count,
  book_folds,
  book_chapter_single_expanders,
) {
  arguments_assert(arguments, 8);
  let same = equal(book_code, book_current.book_code);
  if (same) {
    return;
  }
  book_current.book_code = book_code;
  let chapter_expands = [];
  book_current.chapter_expands = chapter_expands;
  let div_group = book_group_div(book_code);
  let div_book = app_shared_container_blue(div_group);
  ("this is the third of four cards nested one inside the next, and the two outside it already trim to this one named amount; it used to write its own number a twentieth of a letter away from that, which no reader could have told apart and no line of the file explained");
  let header = app_search_results_book_card_header(
    div_book,
    books,
    book_code,
    results,
    result_verses_count,
  );
  let div_body = html_div_centered(div_book);
  book_current.body = div_body;
  ("whether this card is shut is kept on an object rather than under a name of its own, because one function writes it and another reads it: the setter below records it, and the click that flips the card reads it to know which way to flip. A name would give each of them its own copy the moment these two were pulled apart, and the card would then flip only on every other click.");
  let card = {
    collapsed: false,
  };
  function collapsed_set(value) {
    let r = app_search_results_book_card_collapsed_set(
      value,
      card,
      div_body,
      div_book,
      header,
    );
    return r;
  }
  ("this card folds itself its own way - it scrolls into view and fetches its verses as it opens - so it cannot be the shared folding card; it joins the page's group of them by handing over its own setter, and everything below folds it through what comes back, which is the only setter the group hears");
  let collapsed_set_heard = app_shared_folds_setter_add(
    book_folds,
    collapsed_set,
  );
  async function chapters_single_expand() {
    let r2 = await app_search_results_chapters_single_expand(chapter_expands);
    return r2;
  }
  async function toggle() {
    let next = not(card.collapsed);
    collapsed_set_heard(next);
    let expanded = not(next);
    if (expanded) {
      ("the scrolling comes first because it costs no waiting: the reader sees the card land where they can read it while the verses inside it are still arriving");
      await html_scroll_center(div_book);
      await chapters_single_expand();
    }
  }
  html_on_click(header, toggle);
  collapsed_set_heard(false);
  list_add(book_chapter_single_expanders, chapters_single_expand);
}
