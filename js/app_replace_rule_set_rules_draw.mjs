import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_replace_rule_set_each_rule } from "./app_replace_rule_set_each_rule.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { property_set } from "./property_set.mjs";
import { app_replace_rule_set_rbs_each } from "./app_replace_rule_set_rbs_each.mjs";
import { each_index } from "./each_index.mjs";
export function app_replace_rule_set_rules_draw({
  div_rules_buttons,
  refresh_count_increase,
  start_held,
  start_indices_held,
  button_rule_on_click_inner,
  rules_used_held,
  rule_buttons_held,
  success_held,
  index_selected_held,
}) {
  arguments_assert(arguments, 1);
  html_clear(div_rules_buttons);
  refresh_count_increase();
  function each_rule(rule, index) {
    let r = app_replace_rule_set_each_rule(
      rule,
      index,
      start_held,
      start_indices_held,
      button_rule_on_click_inner,
      div_rules_buttons,
    );
    return r;
  }
  let list = property_get(rules_used_held, "rules_used");
  let value = list_map_index(list, each_rule);
  property_set(rule_buttons_held, "rule_buttons", value);
  function rbs_each(rule_button, rule_index) {
    let success = property_get(success_held, "success");
    let index_selected = property_get(index_selected_held, "index_selected");
    let r3 = app_replace_rule_set_rbs_each(
      rule_button,
      rule_index,
      index_selected,
      success,
    );
    return r3;
  }
  let list8 = property_get(rule_buttons_held, "rule_buttons");
  each_index(list8, rbs_each);
}
