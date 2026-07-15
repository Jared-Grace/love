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
import { app_replace_button_rule_content } from "./app_replace_button_rule_content.mjs";
import { app_replace_button_symbol_style_box_shadow } from "./app_replace_button_symbol_style_box_shadow.mjs";
import { app_shared_container_blue_border_color } from "./app_shared_container_blue_border_color.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function app_replace_rule_set_proof_connector(parent, index, rule, gap) {
  "the link that carries one state down to the next: the step number to the left, a bold centered down arrow on the same axis as the states, and the rule used - its symbols glowing - to the right";
  let connector = html_div(parent);
  html_display_flex(connector);
  html_style_set(connector, "align-items", "center");
  html_style_margin_y(connector, gap);
  ("both sides get flex:1 with a zero basis so they are equal halves regardless of their content width; that keeps the arrow on the exact center axis the states sit on (plain flex-grow only splits leftover space, so the wider rule side would drag the arrow off-center)");
  let number_side = html_div(connector);
  html_style_set(number_side, "flex", "1");
  html_style_set(number_side, "text-align", "right");
  html_style_set(number_side, "padding-right", gap);
  html_span_text_deemphasized(number_side, text_combine_multiple([index, "."]));
  let arrow = html_span_text(connector, text_arrow_down());
  html_bold(arrow);
  html_style_font_size(arrow, "1.5em");
  let rule_side = html_div(connector);
  html_style_set(rule_side, "flex", "1");
  html_style_set(rule_side, "padding-left", gap);
  let left = property_get(rule, "left");
  let right = property_get(rule, "right");
  let content = app_replace_button_rule_content(rule_side, left, right);
  let lefts = property_get(content, "lefts");
  let rights = property_get(content, "rights");
  let color = app_shared_container_blue_border_color();
  function glow(symbol) {
    app_replace_button_symbol_style_box_shadow(true, symbol, color);
  }
  each(lefts, glow);
  each(rights, glow);
}
