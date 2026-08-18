import { arguments_assert } from "./arguments_assert.mjs";
import { app_replace_rule_set_attribute_refresh_count } from "./app_replace_rule_set_attribute_refresh_count.mjs";
import { html_data_set_test } from "./html_data_set_test.mjs";
export function app_replace_rule_set_refresh_count_increase(
  refresh_count,
  div_rules_buttons,
) {
  arguments_assert(arguments, 2);
  refresh_count++;
  let value = app_replace_rule_set_attribute_refresh_count(refresh_count);
  html_data_set_test(div_rules_buttons, value);
  let r = {
    refresh_count,
  };
  return r;
}
