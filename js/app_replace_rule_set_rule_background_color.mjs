import { app_replace_button_rule_background_color } from "./app_replace_button_rule_background_color.mjs";
import { app_replace_button_rule_selected_background_color } from "./app_replace_button_rule_selected_background_color.mjs";
import { app_replace_rule_set_highlight } from "./app_replace_rule_set_highlight.mjs";
import { ternary_nested } from "./ternary_nested.mjs";
export function app_replace_rule_set_rule_background_color(
  selected,
  enabled,
  success,
) {
  let button_background_color = app_replace_button_rule_background_color();
  let blue_strong = app_replace_button_rule_selected_background_color();
  let c = ternary_nested(
    selected,
    blue_strong,
    enabled,
    button_background_color,
    "#a8a8a8ff",
  );
  if (success) {
    c = app_replace_rule_set_highlight();
  }
  return c;
}
