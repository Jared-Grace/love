import { html_bold } from "../../../love/public/src/html_bold.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { text_pad_space } from "../../../love/public/src/text_pad_space.mjs";
import { text_arrow } from "../../../love/public/src/text_arrow.mjs";
import { app_replace_button_side } from "../../../love/public/src/app_replace_button_side.mjs";
export function app_replace_button_rule_content(b, left, right) {
  let lefts = app_replace_button_side(b, left);
  let s = text_arrow();
  let text = text_pad_space(s);
  let arrow = html_span_text(b, text);
  html_bold(arrow);
  let rights = app_replace_button_side(b, right);
  let r2 = {
    lefts,
    rights,
    arrow,
  };
  return r2;
}
