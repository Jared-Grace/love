import { app_reply_buttons_languages_on_toggle } from "./app_reply_buttons_languages_on_toggle.mjs";
import { app_reply_buttons_languages_reorder } from "./app_reply_buttons_languages_reorder.mjs";
import { app_shared_language_sort_button } from "./app_shared_language_sort_button.mjs";
import { ebible_languages_sort_mode } from "./ebible_languages_sort_mode.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { each_index } from "./each_index.mjs";
import { html_div } from "./html_div.mjs";
import { noop } from "./noop.mjs";
export function app_reply_buttons_languages(languages_chosen, root, languages) {
  ebible_languages_sort_mode(languages);
  let toggle_row = html_div(root);
  let buttons_row = html_div(root);
  let on_toggle = noop;
  let buttons = app_reply_buttons_languages_on_toggle(
    languages_chosen,
    on_toggle,
    buttons_row,
    languages,
  );
  let by_code = {};
  function pair(language, index) {
    let code = property_get(language, "language_code");
    let button = property_get(buttons, index);
    property_set(by_code, code, button);
  }
  each_index(languages, pair);
  function on_sort_change() {
    ebible_languages_sort_mode(languages);
    app_reply_buttons_languages_reorder(buttons_row, languages, by_code);
  }
  app_shared_language_sort_button(toggle_row, on_sort_change);
  return buttons;
}
