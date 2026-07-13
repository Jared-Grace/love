import { html_clear_context } from "./html_clear_context.mjs";
import { app_replace_button_back } from "./app_replace_button_back.mjs";
import { app_shared_screen_set_home } from "./app_shared_screen_set_home.mjs";
import { html_subset_ordered_choose } from "./html_subset_ordered_choose.mjs";
export function app_bible_subset_screen_generic(
  context,
  options,
  chosen,
  name_property,
  key_property,
  on_change,
  choices_label,
  order_label,
) {
  let root = html_clear_context(context);
  function lambda_back() {
    app_shared_screen_set_home(context);
  }
  app_replace_button_back(root, lambda_back);
  html_subset_ordered_choose(
    root,
    options,
    chosen,
    name_property,
    key_property,
    on_change,
    choices_label,
    order_label,
  );
}
