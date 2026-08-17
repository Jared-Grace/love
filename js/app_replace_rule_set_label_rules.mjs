import { arguments_assert } from "./arguments_assert.mjs";
import { app_replace_rule_set_rules_used_all } from "./app_replace_rule_set_rules_used_all.mjs";
import { property_get } from "./property_get.mjs";
export function app_replace_rule_set_label_rules(
  root,
  on_hint,
  context,
  goal_index,
  goals_count,
  end,
  rule_set_name,
) {
  arguments_assert(arguments, 7);
  let r = app_replace_rule_set_rules_used_all(
    root,
    on_hint,
    context,
    goal_index,
    goals_count,
    end,
    rule_set_name,
  );
  let rules_used_all = property_get(r, "rules_used_all");
  let refresh_count = property_get(r, "refresh_count");
  let duration = property_get(r, "duration");
  let rule_buttons = property_get(r, "rule_buttons");
  let symbol_buttons = property_get(r, "symbol_buttons");
  let success = property_get(r, "success");
  let div_below = property_get(r, "div_below");
  let goal_list_symbols = property_get(r, "goal_list_symbols");
  let div_refresh = property_get(r, "div_refresh");
  let label_symbols = property_get(r, "label_symbols");
  let div_rules_buttons = property_get(r, "div_rules_buttons");
  let symbols_invalid_chosen = property_get(r, "symbols_invalid_chosen");
  let div_abbreviations = property_get(r, "div_abbreviations");
  let label_rules = property_get(r, "label_rules");
  let r2 = {
    rules_used_all,
    refresh_count,
    duration,
    rule_buttons,
    symbol_buttons,
    success,
    div_below,
    goal_list_symbols,
    div_refresh,
    label_symbols,
    div_rules_buttons,
    symbols_invalid_chosen,
    div_abbreviations,
    label_rules,
  };
  return r2;
}
