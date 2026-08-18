import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { list_map_property_invoke } from "./list_map_property_invoke.mjs";
export function app_replace_rule_set_button_rule_on_click_inner(
  index,
  symbols_invalid_chosen,
  index_selected,
  symbol_buttons,
  rule_buttons,
  refresh_count_increase,
) {
  arguments_assert(arguments, 6);
  symbols_invalid_chosen = {};
  let condition = equal(index_selected, index);
  index_selected = ternary(condition, null, index);
  list_map_property_invoke(symbol_buttons, "refresh_sb");
  list_map_property_invoke(rule_buttons, "refresh_rb");
  refresh_count_increase();
  let r = {
    symbols_invalid_chosen,
    index_selected,
  };
  return r;
}
