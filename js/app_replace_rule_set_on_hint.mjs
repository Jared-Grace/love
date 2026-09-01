import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_rule_set_verify_goal_next } from "./app_replace_rule_set_verify_goal_next.mjs";
import { list_index_of_json } from "./list_index_of_json.mjs";
import { equal } from "./equal.mjs";
import { list_size_half_ceil } from "./list_size_half_ceil.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_swap_first } from "./list_swap_first.mjs";
import { list_take } from "./list_take.mjs";
import { property_set } from "./property_set.mjs";
export async function app_replace_rule_set_on_hint({
  start_held,
  rules_parsed,
  end,
  rules_used_held,
  index_selected_held,
  start_indices_held,
  refresh,
  button_rule_on_click_inner,
}) {
  "What a player is given when they ask for a hint: the step the goal wants next is worked out, and if the rule they have already chosen is that step then the symbols left to choose between are cut to half with the wanted one among them, and if it is not then the right rule is chosen for them instead.";
  arguments_assert(arguments, 1);
  let start = property_get(start_held, "start");
  let second = app_replace_rule_set_verify_goal_next(rules_parsed, start, end);
  let rule_next = property_get(second, "rule");
  let list11 = property_get(rules_used_held, "rules_used");
  let index_rule = list_index_of_json(list11, rule_next);
  let index_symbol = property_get(second, "index");
  let right = property_get(index_selected_held, "index_selected");
  if (equal(index_rule, right)) {
    let start_indices = property_get(start_indices_held, "start_indices");
    let ceiling = list_size_half_ceil(start_indices);
    let list = property_get(start_indices_held, "start_indices");
    list_shuffle(list);
    let list2 = property_get(start_indices_held, "start_indices");
    list_swap_first(list2, index_symbol);
    let list3 = property_get(start_indices_held, "start_indices");
    let value = list_take(list3, ceiling);
    property_set(start_indices_held, "start_indices", value);
    await refresh();
  } else {
    button_rule_on_click_inner(index_rule);
  }
}
