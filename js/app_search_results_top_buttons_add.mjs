import { app_search_results_collect_all_texts } from "./app_search_results_collect_all_texts.mjs";
import { app_search_results_top_buttons } from "./app_search_results_top_buttons.mjs";
import { app_shared_folds_set } from "./app_shared_folds_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { property_get } from "./property_get.mjs";
export function app_search_results_top_buttons_add(
  div_results,
  book_folds,
  testament_folds,
  buttons,
) {
  "The row above a page of results, together with what each of the three buttons in it does.";
  "The buttons are drawn before there is a single card to act on, and every one of them acts on all of them, so what they act on cannot be handed over as a list - it is set on an object here and filled in further down the page, and each button reads it at the moment it is pressed rather than at the moment it was drawn.";
  arguments_assert(arguments, 4);
  async function expand_all_lambda() {
    "open the book cards first: on a page long enough to scroll they start collapsed, so filling in the verses inside them changes nothing the reader can see, and the button reads as broken. opening them costs no waiting, so it lands before the verse texts are fetched and the reader watches them arrive";
    "the testament cards open ahead of the books inside them, since a reader who folded one away would otherwise press this and watch nothing happen there";
    app_shared_folds_set(testament_folds, false);
    app_shared_folds_set(book_folds, false);
    let button_list = property_get(buttons, "list");
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
}
