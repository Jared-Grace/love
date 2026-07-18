import { app_shared_button } from "./app_shared_button.mjs";
import { app_language_sort_get } from "./app_language_sort_get.mjs";
import { app_language_sort_toggle } from "./app_language_sort_toggle.mjs";
import { app_language_sort_label } from "./app_language_sort_label.mjs";
export function app_shared_language_sort_button(parent, on_change) {
  let mode = app_language_sort_get();
  let label = app_language_sort_label(mode);
  function on_click() {
    app_language_sort_toggle();
    on_change();
  }
  app_shared_button(parent, label, on_click);
}
