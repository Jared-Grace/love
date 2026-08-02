import { list_size } from "./list_size.mjs";
import { app_shared_bible_picker_button_size } from "./app_shared_bible_picker_button_size.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { each } from "./each.mjs";
export function app_shared_bible_picker_buttons_enlarge(buttons) {
  "the book/chapter/verse pickers are the primary touch surface on a phone, so size every choice to how many there are: a short list that all fits gets big chunky targets, a long one keeps the standard enlarged size - larger targets are better whenever there is room for them";
  let count = list_size(buttons);
  let size = app_shared_bible_picker_button_size(count);
  let font = property_get(size, "font");
  let pad_x = property_get(size, "pad_x");
  let pad_y = property_get(size, "pad_y");
  let margin_x = property_get(size, "margin_x");
  let margin_y = property_get(size, "margin_y");
  function lambda(button) {
    html_style_font_size(button, font);
    html_style_padding_x(button, pad_x);
    html_style_padding_y(button, pad_y);
    html_style_margin_x(button, margin_x);
    html_style_margin_y(button, margin_y);
  }
  each(buttons, lambda);
}
