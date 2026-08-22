import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_buttons_expand_collapse } from "./app_shared_buttons_expand_collapse.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
import { html_br_2 } from "./html_br_2.mjs";
export function app_search_results_top_buttons(
  div_results,
  expand_all_lambda,
  collapse_all_lambda,
  copy_all_lambda,
  folds_expand,
  folds_collapse,
) {
  "The row above a page of results: open everything, shut everything, and take the lot away as text.";
  "The first two are next door and shared, because a song's page hides its passages behind clicks for the same reason results hide theirs, and a reader who has learnt the pair on one page should not have to learn them again on the other.";
  "Copying stays here, because it is the results that are worth carrying off whole - a song's words are already the page.";
  "Which groups of cards each of the first two acts on is passed straight through, because switching a button off when it has nothing left to do is the shared pair's own business and the same business on both pages.";
  arguments_assert(arguments, 6);
  app_shared_buttons_expand_collapse(
    div_results,
    expand_all_lambda,
    collapse_all_lambda,
    folds_expand,
    folds_collapse,
  );
  let left = html_button_copy_text();
  app_shared_button_wide_text_combine(
    div_results,
    left,
    " all",
    copy_all_lambda,
  );
  html_br_2(div_results);
}
