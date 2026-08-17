import { arguments_assert } from "./arguments_assert.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_refresh_rb } from "./app_replace_rule_set_refresh_rb.mjs";
export function app_replace_rule_set_rbs_each(
  rule_button,
  rule_index,
  index_selected,
  success,
) {
  arguments_assert(arguments, 4);
  refresh_rb();
  object_merge_set(rule_button, {
    refresh_rb,
  });
  function refresh_rb() {
    let state = {
      index_selected,
      success,
    };
    app_replace_rule_set_refresh_rb(rule_button, rule_index, state);
  }
}
