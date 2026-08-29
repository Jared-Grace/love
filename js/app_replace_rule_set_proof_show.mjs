import { html_clear } from "./html_clear.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { list_last } from "./list_last.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { app_replace_rule_set_proof_connector } from "./app_replace_rule_set_proof_connector.mjs";
import { app_replace_lefts_rights_style } from "./app_replace_lefts_rights_style.mjs";
import { app_replace_rule_set_rule_background_color } from "./app_replace_rule_set_rule_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_deemphasized } from "./html_span_text_deemphasized.mjs";
import { app_replace_rule_set_proof_show_state_row } from "./app_replace_rule_set_proof_show_state_row.mjs";
import { app_replace_rule_set_proof_show_goal_caption } from "./app_replace_rule_set_proof_show_goal_caption.mjs";
import { each_index } from "./each_index.mjs";
export function app_replace_rule_set_proof_show(parent, history) {
  "on success, show the proof as a centered rail underneath start over, and make each rule a button: choosing one highlights just the symbols it replaced (the matched left in the state above, the produced right in the state below) and the rule itself, and de-glows everything else; choosing it again clears the focus";
  "DRAWING A LINE OF SYMBOLS AND SAYING WHERE THE PROOF ARRIVED ARE BOTH DONE NEXT DOOR, so what stands here is only the one thing that cannot leave: which rule is chosen, which every press changes and every part of the drawing reads.";
  "THE WHOLE RAIL IS THROWN AWAY AND DRAWN AGAIN ON EVERY PRESS rather than the two lines that changed being found and touched, because a rule lights symbols in the lines on both sides of it, so working out what changed is most of the work of drawing it.";
  let selected = null;
  render();
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
        app_replace_lefts_rights_style(result, selected_this, false);
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
      app_replace_rule_set_proof_show_state_row(
        parent,
        entry,
        position,
        selected,
        history,
      );
      if (equal(entry, goal_entry)) {
        app_replace_rule_set_proof_show_goal_caption(parent);
      }
    }
    each_index(history, draw);
  }
}
