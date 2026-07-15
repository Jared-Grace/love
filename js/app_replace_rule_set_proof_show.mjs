import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_p } from "./html_p.mjs";
import { app_replace_button_side } from "./app_replace_button_side.mjs";
import { app_replace_button_symbol_style_valid_if_curried_right } from "./app_replace_button_symbol_style_valid_if_curried_right.mjs";
import { each } from "./each.mjs";
export function app_replace_rule_set_proof_show(parent, history) {
  "on success, show the whole proof underneath start over: every state from the start, through each intermediate step, up to the goal - so the finished path is visible as a whole, not just the final answer";
  app_shared_text_body(parent, "Your steps:");
  let style = app_replace_button_symbol_style_valid_if_curried_right(
    false,
    false,
  );
  function state_each(state) {
    let p = html_p(parent);
    let symbols = app_replace_button_side(p, state);
    each(symbols, style);
  }
  each(history, state_each);
}
