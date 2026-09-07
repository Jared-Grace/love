import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
import { each_index } from "./each_index.mjs";
export function app_shared_buttons_mark_current(buttons, items, current) {
  "Give the one button in a row that stands for what you are looking at now the selected style, and leave the rest at their default - so a row of choices shows where you already are rather than only what you could go to.";
  "The buttons and the things they stand for are handed in as two lists running in the same order, which is what lets this know nothing at all about what the choices are. A chapter, a verse, and a yes-or-no all mark the same way, so none of them needs its own copy of this.";
  function lambda(button, index) {
    let item = list_get(items, index);
    let is_current = equal(item, current);
    app_shared_button_toggle_style(is_current, button);
  }
  each_index(buttons, lambda);
}
