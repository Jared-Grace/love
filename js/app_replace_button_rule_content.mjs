import { html_span_text_padded_space } from "./html_span_text_padded_space.mjs";
import { html_bold } from "./html_bold.mjs";
import { text_arrow } from "./text_arrow.mjs";
import { app_replace_button_side } from "./app_replace_button_side.mjs";
export function app_replace_button_rule_content(parent, left, right) {
  let lefts = app_replace_button_side(parent, left);
  let s = text_arrow();
  let arrow = html_span_text_padded_space(parent, s);
  html_bold(arrow);
  let rights = app_replace_button_side(parent, right);
  let r = {
    lefts,
    rights,
    arrow,
  };
  return r;
}
