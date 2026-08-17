import { arguments_assert } from "./arguments_assert.mjs";
import { app_replace_rule_set_header } from "./app_replace_rule_set_header.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_p } from "./html_p.mjs";
import { app_replace_rule_set_goal_show } from "./app_replace_rule_set_goal_show.mjs";
import { app_replace_animation_duration_get } from "./app_replace_animation_duration_get.mjs";
import { app_replace_rule_sets_fns_rules_used } from "./app_replace_rule_sets_fns_rules_used.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function app_replace_rule_set_rules_used_all(
  root,
  on_hint,
  context,
  goal_index,
  goals_count,
  end,
  rule_set_name,
) {
  arguments_assert(arguments, 7);
  let r = app_replace_rule_set_header(
    root,
    on_hint,
    context,
    goal_index,
    goals_count,
  );
  let label_rules = property_get(r, "label_rules");
  let div_abbreviations = property_get(r, "div_abbreviations");
  let symbols_invalid_chosen = {};
  let div_rules_buttons = html_div(root);
  let label_symbols = html_p(root);
  let div_refresh = html_div(root);
  let goal_list_symbols = app_replace_rule_set_goal_show(root, end);
  let div_below = html_div(root);
  let success = false;
  let symbol_buttons = null;
  let rule_buttons = null;
  let duration = app_replace_animation_duration_get(context);
  let refresh_count = 0;
  let rules_useds = app_replace_rule_sets_fns_rules_used();
  let rules_used_all = property_get_or_null(rules_useds, rule_set_name);
  let r2 = {
    label_rules,
    div_abbreviations,
    symbols_invalid_chosen,
    div_rules_buttons,
    label_symbols,
    div_refresh,
    goal_list_symbols,
    div_below,
    success,
    symbol_buttons,
    rule_buttons,
    duration,
    refresh_count,
    rules_used_all,
  };
  return r2;
}
