import { app_shared_bible_screen_open } from "./app_shared_bible_screen_open.mjs";
import { ebible_languages_sort_mode } from "./ebible_languages_sort_mode.mjs";
import { app_shared_language_sort_button } from "./app_shared_language_sort_button.mjs";
import { html_subset_ordered_choose } from "./html_subset_ordered_choose.mjs";
export function app_bible_subset_screen_generic(
  context,
  options,
  chosen,
  name_property,
  key_property,
  on_change,
  choices_label,
  back,
) {
  "back is the caller's: the bible languages chooser returns to the settings hub, the supper versions chooser returns home";
  let root = app_shared_bible_screen_open(context, back);
  ebible_languages_sort_mode(options);
  function on_sort_change() {
    app_bible_subset_screen_generic(
      context,
      options,
      chosen,
      name_property,
      key_property,
      on_change,
      choices_label,
      back,
    );
  }
  app_shared_language_sort_button(root, on_sort_change);
  html_subset_ordered_choose(
    root,
    options,
    chosen,
    name_property,
    key_property,
    on_change,
    choices_label,
  );
}
