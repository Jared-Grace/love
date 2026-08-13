import { app_replace_rules_used_unknown } from "./app_replace_rules_used_unknown.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function app_replace_rules_used_gate_run() {
  "Gate: every rule a goal offers is still a rule of the exercise it belongs to.";
  "Against zero rather than against a baseline: a saved list that offers a rule its exercise does not have is broken for the player in every case, and regenerating it is one command - app_replace_rule_sets_fns_rules_used_generate - so there is nothing here to grandfather.";
  let offenders = app_replace_rules_used_unknown();
  list_empty_is_assert_json(offenders, {
    hint: "an exercise's rules changed and the saved rules-for-a-goal list still spells the old ones - rerun app_replace_rule_sets_fns_rules_used_generate",
  });
}
