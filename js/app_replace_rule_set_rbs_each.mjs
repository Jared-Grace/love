import { arguments_assert } from "./arguments_assert.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_rule_set_refresh_rb } from "./app_replace_rule_set_refresh_rb.mjs";
export function app_replace_rule_set_rbs_each(
  rule_button,
  rule_index,
  index_selected_held,
  success_held,
) {
  "Handed the boxes, not what is in them: refresh_rb is called again after a rule is chosen and after the goal is reached, and has to read the choice as it is THEN. Handed the values, it redrew every rule as the draw left it, so choosing a rule did not light it up and a solved goal did not turn the rules green.";
  arguments_assert(arguments, 4);
  refresh_rb();
  object_merge_set(rule_button, {
    refresh_rb,
  });
  function refresh_rb() {
    let state = {
      index_selected: property_get(index_selected_held, "index_selected"),
      success: property_get(success_held, "success"),
    };
    app_replace_rule_set_refresh_rb(rule_button, rule_index, state);
  }
}
