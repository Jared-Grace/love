import { add_1_period } from "./add_1_period.mjs";
import { app_replace_button_wide_text_left_centered } from "./app_replace_button_wide_text_left_centered.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_button_numbered(root, index, on_click) {
  "a wide list button that leads with its 1-based position, de-emphasized and left-aligned so a column of them reads as a numbered list with every number starting at the same left edge; the muting lives here once, so every app's numbered list looks the same for free; returns the button, the number span (append a status marker to it), and the title slot (fill it with the row's content)";
  let text = add_1_period(index);
  let r = app_replace_button_wide_text_left_centered(root, on_click, text, "");
  let button = property_get(r, "button");
  let number = property_get(r, "left");
  ("the number sits left-aligned in an auto-width first column, so every button's number starts at the same left edge (they line up) and a trailing status emoji grows the column rather than spilling outside the button");
  html_style_set(number, "white-space", "nowrap");
  app_shared_text_deemphasized(number);
  let title = property_get(r, "title");
  let result = {
    button,
    number,
    title,
  };
  return result;
}
