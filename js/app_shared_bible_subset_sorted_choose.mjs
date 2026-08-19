import { html_clear } from "./html_clear.mjs";
import { list_filter_property_text_includes } from "./list_filter_property_text_includes.mjs";
import { app_shared_search_render } from "./app_shared_search_render.mjs";
import { ebible_languages_sort_mode } from "./ebible_languages_sort_mode.mjs";
import { app_shared_language_sort_button } from "./app_shared_language_sort_button.mjs";
import { html_subset_ordered_choose } from "./html_subset_ordered_choose.mjs";
export function app_shared_bible_subset_sorted_choose(
  container,
  options,
  chosen,
  name_property,
  key_property,
  on_change,
  choices_label,
  on_sort_change,
) {
  "choosing some of the bible's languages, or some of its versions, is the same act on the same shape of list - every entry carries a name and a language code - so both are drawn here: put the list in whichever order the reader last asked for, offer the button that changes that order, then offer the list itself.";
  "the order matters and is the reason this is one function rather than three calls each caller repeats: sorting has to happen before the list is drawn, and the button that re-sorts has to sit above what it re-sorts.";
  "how to redraw after the order changes stays the caller's, because each caller reopens itself - a screen reopens its screen and a panel reopens its panel, and neither can be reached from here.";
  "the list of languages runs to hundreds, so it gets the same search box the book picker has: type a name and only the names holding it stay on offer. what you have already chosen is untouched by the box - the query narrows what is offered, never what is kept.";
  ebible_languages_sort_mode(options);
  app_shared_language_sort_button(container, on_sort_change);
  function on_query(list_div, query) {
    html_clear(list_div);
    let matching = list_filter_property_text_includes(
      options,
      name_property,
      query,
    );
    html_subset_ordered_choose(
      list_div,
      matching,
      chosen,
      name_property,
      key_property,
      on_change,
      choices_label,
    );
  }
  app_shared_search_render(container, "Search by name", on_query);
}
