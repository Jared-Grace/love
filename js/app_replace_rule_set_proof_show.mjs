import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_element } from "./html_element.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { app_replace_button_side } from "./app_replace_button_side.mjs";
import { app_replace_button_rule_content } from "./app_replace_button_rule_content.mjs";
import { app_replace_button_symbol_style_valid_if_curried_right } from "./app_replace_button_symbol_style_valid_if_curried_right.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { each } from "./each.mjs";
import { each_index } from "./each_index.mjs";
export function app_replace_rule_set_proof_show(parent, history) {
  "on success, show the whole proof as a numbered table underneath start over: one row per step reading start state to goal, top to bottom - the rightmost column is the string at that step, the column left of it is the rule that produced the string, and the leftmost is the step number (the start row has neither number nor rule)";
  app_shared_text_body(parent, "Your steps:");
  let table = html_element(parent, "table");
  let body = html_element(table, "tbody");
  let style = app_replace_button_symbol_style_valid_if_curried_right(true, true);
  let gap = app_shared_spaced_small_gap();
  function row(entry, index) {
    let state = property_get(entry, "state");
    let rule = property_get(entry, "rule");
    let tr = html_element(body, "tr");
    let td_number = html_element(tr, "td");
    let td_rule = html_element(tr, "td");
    let td_state = html_element(tr, "td");
    html_style_padding_x(td_number, gap);
    html_style_padding_x(td_rule, gap);
    if (null_not_is(rule)) {
      html_text_set(td_number, index);
      let left = property_get(rule, "left");
      let right = property_get(rule, "right");
      app_replace_button_rule_content(td_rule, left, right);
    }
    let symbols = app_replace_button_side(td_state, state);
    each(symbols, style);
  }
  each_index(history, row);
}
