import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_to_indices } from "./list_to_indices.mjs";
import { property_set } from "./property_set.mjs";
import { app_replace_button_rule } from "./app_replace_button_rule.mjs";
import { html_disable } from "./html_disable.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export function app_replace_rule_set_each_rule(
  rule,
  index,
  start_held,
  start_indices_held,
  button_rule_on_click_inner,
  div_rules_buttons,
) {
  arguments_assert(arguments, 6);
  function button_rule_on_click() {
    let list = property_get(start_held, "start");
    let value = list_to_indices(list);
    property_set(start_indices_held, "start_indices", value);
    button_rule_on_click_inner(index);
  }
  let rule_result = app_replace_button_rule(
    div_rules_buttons,
    rule,
    button_rule_on_click,
  );
  let arrow = property_get(rule_result, "arrow");
  let rights = property_get(rule_result, "rights");
  let lefts = property_get(rule_result, "lefts");
  let rule_button = property_get(rule_result, "b");
  html_disable(rule_button);
  object_merge_set(rule_button, {
    rule,
    lefts,
    rights,
    arrow,
  });
  return rule_button;
}
