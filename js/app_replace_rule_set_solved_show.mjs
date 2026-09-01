import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property_invoke } from "./list_map_property_invoke.mjs";
import { ternary } from "./ternary.mjs";
import { app_replace_rule_set_success } from "./app_replace_rule_set_success.mjs";
import { app_replace_rule_set_proof_show } from "./app_replace_rule_set_proof_show.mjs";
export async function app_replace_rule_set_solved_show(
  rule_buttons_held,
  resumed,
  duration,
  rule_set_name,
  goal,
  context,
  goal_list_symbols,
  symbol_buttons_held,
  div_below,
  goal_index,
  goals,
  history,
  div_proof,
) {
  arguments_assert(arguments, 13);
  let list = property_get(rule_buttons_held, "rule_buttons");
  list_map_property_invoke(list, "refresh_rb");
  ("a resumed goal snaps straight to solved (duration 0): the win animation is feedback for the act of solving, so on a refresh - where nothing was just done - it is skipped and only the message and proof appear");
  let success_duration = ternary(resumed, 0, duration);
  await app_replace_rule_set_success({
    rule_name: rule_set_name,
    goal,
    context,
    goal_list_symbols,
    sbs: property_get(symbol_buttons_held, "symbol_buttons"),
    duration: success_duration,
    div_below,
    goal_index,
    goals,
    history,
  });
  app_replace_rule_set_proof_show(div_proof, history);
}
