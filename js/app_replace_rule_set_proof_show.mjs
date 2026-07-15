import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_deemphasized } from "./html_span_text_deemphasized.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_replace_button_side } from "./app_replace_button_side.mjs";
import { app_replace_button_rule_content } from "./app_replace_button_rule_content.mjs";
import { app_replace_button_symbol_style_valid_if_curried_right } from "./app_replace_button_symbol_style_valid_if_curried_right.mjs";
import { text_arrow_down } from "./text_arrow_down.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { equal } from "./equal.mjs";
import { list_last } from "./list_last.mjs";
import { each } from "./each.mjs";
import { each_index } from "./each_index.mjs";
export function app_replace_rule_set_proof_show(parent, history) {
  "on success, show the whole proof as a vertical rail underneath start over: the states stack top (Start) to bottom (Goal) as the prominent green nodes, and between each pair sits its numbered rule - dimmed and arrow-led - so each rule reads as the link that carries one state down to the next";
  app_shared_text_body(parent, "Your steps:");
  let gap = app_shared_spaced_small_gap();
  let style = app_replace_button_symbol_style_valid_if_curried_right(true, true);
  let goal_entry = list_last(history);
  function draw(entry, index) {
    let rule = property_get(entry, "rule");
    if (null_not_is(rule)) {
      let connector = html_div(parent);
      html_style_margin_y(connector, gap);
      app_shared_text_deemphasized(connector);
      html_span_text(connector, text_arrow_down());
      html_span_text(connector, text_combine_multiple(["  ", index, ".  "]));
      let left = property_get(rule, "left");
      let right = property_get(rule, "right");
      app_replace_button_rule_content(connector, left, right);
    }
    let state = property_get(entry, "state");
    let row = html_div(parent);
    if (equal(index, 0)) {
      html_span_text_deemphasized(row, "Start:  ");
    }
    let symbols = app_replace_button_side(row, state);
    each(symbols, style);
    if (equal(entry, goal_entry)) {
      let goal_text = text_combine_multiple(["  ", emoji_check(), " Goal"]);
      html_span_text_deemphasized(row, goal_text);
    }
  }
  each_index(history, draw);
}
