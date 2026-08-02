import { each_index } from "./each_index.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
export function app_shared_bible_picker_mark_current(buttons, items, current) {
  "give the choice you are currently reading the selected style and leave the rest at their default, so opening a chapter or verse picker shows where you already are; buttons and items run in the same order";
  function lambda(button, index) {
    let item = list_get(items, index);
    let is_current = equal(item, current);
    app_shared_button_toggle_style(is_current, button);
  }
  each_index(buttons, lambda);
}
