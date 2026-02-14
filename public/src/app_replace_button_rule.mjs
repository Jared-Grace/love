import { html_bold } from "../../../love/public/src/html_bold.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { text_pad_space } from "../../../love/public/src/text_pad_space.mjs";
import { text_arrow } from "../../../love/public/src/text_arrow.mjs";
import { app_replace_button_side } from "../../../love/public/src/app_replace_button_side.mjs";
import { html_border_none } from "../../../love/public/src/html_border_none.mjs";
import { html_style_padding_y } from "../../../love/public/src/html_style_padding_y.mjs";
import { app_replace_button_symbol_style } from "../../../love/public/src/app_replace_button_symbol_style.mjs";
import { html_button_notext } from "../../../love/public/src/html_button_notext.mjs";
export function app_replace_button_rule(root, on_click, right, left) {
  let b = html_button_notext(root, on_click);
  app_replace_button_symbol_style(b);
  html_style_padding_y(b, "0.3em");
  html_border_none(b);
  let lefts = app_replace_button_side(b, left);
  let s = text_arrow();
  let text = text_pad_space(s);
  let arrow = html_span_text(b, text);
  html_bold(arrow);
  let rights = app_replace_button_side(b, right);
  let r2 = {
    b,
    lefts,
    rights,
    arrow,
  };
  return r2;
}
