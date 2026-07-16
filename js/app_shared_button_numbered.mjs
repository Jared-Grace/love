import { add_1_period } from "./add_1_period.mjs";
import { app_replace_button_wide_text_left_centered } from "./app_replace_button_wide_text_left_centered.mjs";
import { app_shared_number_gutter } from "./app_shared_number_gutter.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_button_numbered(root, index, on_click) {
  "a wide list button that leads with its 1-based position, de-emphasized and right-aligned in a fixed gutter so a column of them reads as a numbered list; the muting lives here once, so every app's numbered list looks the same for free; returns the button, the number span (append a status marker to it), and the title slot (fill it with the row's content)";
  let text = add_1_period(index);
  let r = app_replace_button_wide_text_left_centered(root, on_click, text, "");
  let button = property_get(r, "button");
  let columns = text_combine(app_shared_number_gutter(), " 1fr");
  html_style_set(button, "grid-template-columns", columns);
  let number = property_get(r, "left");
  html_style_set(number, "justify-self", "end");
  app_shared_text_deemphasized(number);
  let title = property_get(r, "title");
  let result = {
    button,
    number,
    title,
  };
  return result;
}
