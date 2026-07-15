import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_span_text_deemphasized } from "./html_span_text_deemphasized.mjs";
import { app_replace_button_side } from "./app_replace_button_side.mjs";
import { app_replace_button_symbol_style_valid_if_curried_right } from "./app_replace_button_symbol_style_valid_if_curried_right.mjs";
import { app_replace_rule_set_proof_connector } from "./app_replace_rule_set_proof_connector.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { equal } from "./equal.mjs";
import { list_last } from "./list_last.mjs";
import { each } from "./each.mjs";
import { each_index } from "./each_index.mjs";
export function app_replace_rule_set_proof_show(parent, history) {
  "on success, show the whole proof as a centered vertical rail underneath start over: states stack top (Start) to bottom (Goal) centered as the green nodes, and between each pair a bold centered down arrow carries the eye down with the rule used glowing to its right";
  let header = app_shared_text_body(parent, "Your steps:");
  html_centered(header);
  let gap = app_shared_spaced_small_gap();
  let style = app_replace_button_symbol_style_valid_if_curried_right(true, true);
  let goal_entry = list_last(history);
  function draw(entry, index) {
    let rule = property_get(entry, "rule");
    if (null_not_is(rule)) {
      app_replace_rule_set_proof_connector(parent, index, rule, gap);
    }
    if (equal(index, 0)) {
      let start_caption = html_div(parent);
      html_centered(start_caption);
      html_span_text_deemphasized(start_caption, "Start");
    }
    let state = property_get(entry, "state");
    let row = html_div(parent);
    html_centered(row);
    let symbols = app_replace_button_side(row, state);
    each(symbols, style);
    if (equal(entry, goal_entry)) {
      let goal_caption = html_div(parent);
      html_centered(goal_caption);
      let goal_text = text_combine_multiple([emoji_check(), " Goal"]);
      html_span_text_deemphasized(goal_caption, goal_text);
    }
  }
  each_index(history, draw);
}
