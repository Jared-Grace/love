import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
import { app_shared_color_gray_medium } from "./app_shared_color_gray_medium.mjs";
import { app_shared_button_border_width } from "./app_shared_button_border_width.mjs";
import { html_border } from "./html_border.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_button_inline_sentence(div, text, lambda) {
  arguments_assert(arguments, 3);
  let button = app_shared_button_inline(div, text, lambda);
  ("the same thin edge the app draws round every other pale button, so words standing in a sentence still read as one of them");
  let border_color = app_shared_color_gray_medium();
  let border_width = app_shared_button_border_width();
  html_border(button, border_width, border_color);
  ("the punctuation that follows sits against it, the way it would against the same words written plainly, so the gap the button keeps on its right is taken away");
  html_style_assign(button, {
    "margin-right": "0",
  });
}
