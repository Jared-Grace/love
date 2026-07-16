import { app_shared_text_body } from "../../love/js/app_shared_text_body.mjs";
import { html_centered } from "../../love/js/html_centered.mjs";
import { html_div } from "../../love/js/html_div.mjs";
import { html_clear } from "../../love/js/html_clear.mjs";
import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
import { app_shared_spaced_small_gap } from "../../love/js/app_shared_spaced_small_gap.mjs";
import { app_shared_spaced_gap } from "../../love/js/app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "../../love/js/html_style_margin_top.mjs";
import { html_span_text_deemphasized } from "../../love/js/html_span_text_deemphasized.mjs";
import { app_replace_button_side } from "../../love/js/app_replace_button_side.mjs";
import { app_replace_symbol_tile_valid_if } from "../../love/js/app_replace_symbol_tile_valid_if.mjs";
import { app_replace_lefts_rights_style } from "../../love/js/app_replace_lefts_rights_style.mjs";
import { app_replace_rule_set_rule_background_color } from "../../love/js/app_replace_rule_set_rule_background_color.mjs";
import { app_replace_rule_set_proof_connector } from "../../love/js/app_replace_rule_set_proof_connector.mjs";
import { text_combine_multiple } from "../../love/js/text_combine_multiple.mjs";
import { emoji_check } from "../../love/js/emoji_check.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { null_is } from "../../love/js/null_is.mjs";
import { null_not_is } from "../../love/js/null_not_is.mjs";
import { and } from "../../love/js/and.mjs";
import { equal } from "../../love/js/equal.mjs";
import { ternary } from "../../love/js/ternary.mjs";
import { add } from "../../love/js/add.mjs";
import { subtract } from "../../love/js/subtract.mjs";
import { less_than } from "../../love/js/less_than.mjs";
import { greater_than_equal } from "../../love/js/greater_than_equal.mjs";
import { list_last } from "../../love/js/list_last.mjs";
import { list_get } from "../../love/js/list_get.mjs";
import { list_size } from "../../love/js/list_size.mjs";
import { each_index } from "../../love/js/each_index.mjs";
export function app_replace_rule_set_proof_show(parent, history) {
  "on success, show the proof as a centered rail underneath start over, and make each rule a button: choosing one highlights just the symbols it replaced (the matched left in the state above, the produced right in the state below) and the rule itself, and de-glows everything else; choosing it again clears the focus";
  let selected = null;
  render();
  function in_run(j, run_start, size) {
    let run_end = add(run_start, size);
    return and(greater_than_equal(j, run_start), less_than(j, run_end));
  }
  function highlighted_is(position, j) {
    if (null_is(selected)) {
      ("with nothing chosen every step symbol glows green (the whole solved proof); choosing a rule narrows the green to just that rule's single usage and darkens the rest");
      return true;
    }
    let entry = list_get(history, selected);
    let rule = property_get(entry, "rule");
    let index = property_get(entry, "index");
    if (equal(position, selected)) {
      let right = property_get(rule, "right");
      return in_run(j, index, list_size(right));
    }
    if (equal(position, subtract(selected, 1))) {
      let left = property_get(rule, "left");
      return in_run(j, index, list_size(left));
    }
    return false;
  }
  function render() {
    html_clear(parent);
    let header = app_shared_text_body(parent, "Your steps:");
    html_centered(header);
    let gap = app_shared_spaced_small_gap();
    let goal_entry = list_last(history);
    function draw(entry, position) {
      let rule = property_get(entry, "rule");
      if (null_not_is(rule)) {
        let selected_this = equal(selected, position);
        function on_click() {
          selected = ternary(selected_this, null, position);
          render();
        }
        let result = app_replace_rule_set_proof_connector(
          parent,
          position,
          rule,
          gap,
          on_click,
        );
        let glowing = selected_this;
        app_replace_lefts_rights_style(result, glowing, false);
        let button = property_get(result, "b");
        let enabled = true;
        ("proof rules are always clickable, so a non-selected one takes the derivation's plain uncolored background (enabled), not a grey disabled background that appears nowhere else - keeping the rule styles to the two the derivation already uses");
        let bg = app_replace_rule_set_rule_background_color(
          selected_this,
          enabled,
          false,
        );
        html_style_background_color_set(button, bg);
      }
      if (equal(position, 0)) {
        let start_caption = html_div(parent);
        html_centered(start_caption);
        html_span_text_deemphasized(start_caption, "Start");
      }
      let state = property_get(entry, "state");
      let row = html_div(parent);
      html_centered(row);
      let symbols = app_replace_button_side(row, state);
      function style_symbol(symbol, j) {
        "highlighted symbols get the green solved style; the rest get the plain invalid/dark style already used in the derivation and for dimmed rules - no new style, just valid off";
        let highlighted = highlighted_is(position, j);
        app_replace_symbol_tile_valid_if(symbol, highlighted, true);
      }
      each_index(symbols, style_symbol);
      if (equal(entry, goal_entry)) {
        let goal_caption = html_div(parent);
        html_centered(goal_caption);
        html_style_margin_top(goal_caption, app_shared_spaced_gap());
        let goal_text = text_combine_multiple([emoji_check(), " Goal"]);
        html_span_text_deemphasized(goal_caption, goal_text);
      }
    }
    each_index(history, draw);
  }
}
