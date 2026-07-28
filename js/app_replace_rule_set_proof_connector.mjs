import { html_align_items_center } from "./html_align_items_center.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_deemphasized } from "./html_span_text_deemphasized.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { text_arrow_down } from "./text_arrow_down.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_replace_button_rule } from "./app_replace_button_rule.mjs";
export function app_replace_rule_set_proof_connector(
  parent,
  index,
  rule,
  gap,
  on_click,
) {
  "the link that carries one state down to the next: the step number to the left, a bold centered down arrow on the states' axis, and the rule used as a clickable button to the right; both sides get flex:1 with a zero basis so they are equal halves and the arrow stays on the exact center axis the states sit on; returns the button (with its lefts and rights) so the caller can style it selected or dimmed";
  let connector = html_div(parent);
  html_display_flex(connector);
  html_align_items_center(connector);
  html_style_margin_y(connector, gap);
  let number_side = html_div(connector);
  html_style_flex(number_side, "1");
  html_style_set(number_side, "text-align", "right");
  html_style_set(number_side, "padding-right", gap);
  let text = text_combine_multiple([index, "."]);
  html_span_text_deemphasized(number_side, text);
  let text2 = text_arrow_down();
  let arrow = html_span_text(connector, text2);
  html_bold(arrow);
  html_style_font_size(arrow, app_replace_proof_arrow_font_size());
  let rule_side = html_div(connector);
  html_style_flex(rule_side, "1");
  html_style_set(rule_side, "padding-left", gap);
  let result = app_replace_button_rule(rule_side, rule, on_click);
  return result;
}
