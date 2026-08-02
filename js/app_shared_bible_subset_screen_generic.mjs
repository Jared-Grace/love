import { app_shared_bible_screen_open } from "./app_shared_bible_screen_open.mjs";
import { app_shared_bible_subset_sorted_choose } from "./app_shared_bible_subset_sorted_choose.mjs";
export function app_shared_bible_subset_screen_generic(
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
  function on_sort_change() {
    app_shared_bible_subset_screen_generic(
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
  app_shared_bible_subset_sorted_choose(
    root,
    options,
    chosen,
    name_property,
    key_property,
    on_change,
    choices_label,
    on_sort_change,
  );
}
