import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
import { app_shared_color_gray_medium } from "./app_shared_color_gray_medium.mjs";
import { app_shared_button_border_width } from "./app_shared_button_border_width.mjs";
import { html_border } from "./html_border.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_button_inline_sentence(div, number, on_click) {
  arguments_assert(arguments, 3);
  let button = app_shared_button_inline(div, number, on_click);
  ("the same thin edge the app draws round every other pale button, so a number standing in a sentence still reads as one of them");
  let border_color = app_shared_color_gray_medium();
  let border_width = app_shared_button_border_width();
  html_border(button, border_width, border_color);
  ("the comma that follows the number sits against it, the way it would against a number written as plain writing, so the gap the button keeps on its right is taken away");
  html_style_assign(button, {
    "margin-right": "0",
  });
}
