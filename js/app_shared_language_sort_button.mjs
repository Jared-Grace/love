import { app_shared_button } from "./app_shared_button.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_language_sort_get } from "./app_language_sort_get.mjs";
import { app_language_sort_toggle } from "./app_language_sort_toggle.mjs";
import { app_language_sort_label } from "./app_language_sort_label.mjs";
export function app_shared_language_sort_button(parent, on_change) {
  let mode = app_language_sort_get();
  let label = app_language_sort_label(mode);
  let button = null;
  function on_click() {
    app_language_sort_toggle();
    let mode_next = app_language_sort_get();
    let label_next = app_language_sort_label(mode_next);
    html_text_set(button, label_next);
    on_change();
  }
  button = app_shared_button(parent, label, on_click);
}
