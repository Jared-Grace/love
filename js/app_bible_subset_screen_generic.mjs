import { html_clear_context } from "./html_clear_context.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_page_padding_x } from "./html_page_padding_x.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
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
) {
  let root = html_clear_context(context);
  html_centered(root);
  html_page_padding_x(root);
  function lambda_back() {
    app_shared_screen_set_home(context);
  }
  app_shared_button_back(root, lambda_back);
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
