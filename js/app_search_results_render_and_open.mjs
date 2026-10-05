import { arguments_assert } from "./arguments_assert.mjs";
import { app_search_results_render } from "./app_search_results_render.mjs";
import { property_get } from "./property_get.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { app_shared_folds_set } from "./app_shared_folds_set.mjs";
import { list_single } from "./list_single.mjs";
import { html_page_scrolls } from "./html_page_scrolls.mjs";
import { list_single_property } from "./list_single_property.mjs";
import { app_shared_folds_refresh } from "./app_shared_folds_refresh.mjs";
export async function app_search_results_render_and_open(
  div_results,
  books,
  results,
  languages_chosen,
) {
  arguments_assert(arguments, 4);
  let r = app_search_results_render(
    div_results,
    books,
    results,
    languages_chosen,
  );
  let book_chapter_single_expanders = property_get(
    r,
    "book_chapter_single_expanders",
  );
  let book_folds = property_get(r, "book_folds");
  let button_list = property_get(r, "button_list");
  let one_book = list_size_1(book_folds.members);
  if (one_book) {
    ("a search landing inside a single book leaves no book to choose between, so it opens rather than waiting for a click that could only go one way, however long the page is. opening it here, with its chapters already in place, is also what lets a lone chapter open along with it");
    app_shared_folds_set(book_folds, false);
    let only_book_expand = list_single(book_chapter_single_expanders);
    await only_book_expand();
  } else {
    let scrolls = html_page_scrolls();
    if (scrolls) {
      app_shared_folds_set(book_folds, true);
    }
  }
  let s = list_size_1(button_list);
  if (s) {
    let only_click = list_single_property(button_list, "click");
    await only_click();
  }
  ("the first draw fetches some verses without folding anything, and the open-everything button above them is lit while any verse on the page is still empty - so it is asked once more here, when the page has settled, rather than being left saying there is work to do that has already been done");
  app_shared_folds_refresh(book_folds);
}
