import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_p } from "./html_p.mjs";
import { app_replace_button_side } from "./app_replace_button_side.mjs";
import { app_replace_button_symbol_style_valid_if_curried_right } from "./app_replace_button_symbol_style_valid_if_curried_right.mjs";
import { each } from "./each.mjs";
export function app_replace_rule_set_goal_show(root, end) {
  let label_goal = app_shared_text_body(root, "Goal:");
  let p_goal = html_p(root);
  let goal_list_symbols = app_replace_button_side(p_goal, end);
  let lambda4 = app_replace_button_symbol_style_valid_if_curried_right(
    false,
    false,
  );
  each(goal_list_symbols, lambda4);
  return goal_list_symbols;
}
