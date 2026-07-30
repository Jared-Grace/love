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
  ebible_languages_sort_mode(options);
  app_shared_language_sort_button(container, on_sort_change);
  html_subset_ordered_choose(
    container,
    options,
    chosen,
    name_property,
    key_property,
    on_change,
    choices_label,
  );
}
