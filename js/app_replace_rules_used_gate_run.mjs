import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_replace_rules_used_stale } from "./app_replace_rules_used_stale.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function app_replace_rules_used_gate_run() {
  "Gate: every rule a goal offers is still a rule of the exercise it belongs to, and every goal still has a saved list to offer.";
  ("Against zero rather than against a baseline: a saved list that offers a rule its exercise does not have, or that stops short of the goal being played, is broken for the player in every case, and regenerating it is one command - ",
    fn_name("app_replace_rule_sets_fns_rules_used_generate"),
    " - so there is nothing here to grandfather.");
  let offenders = app_replace_rules_used_stale();
  let f_name = fn_name("app_replace_rule_sets_fns_rules_used_generate");
  list_empty_is_assert_json(offenders, {
    hint: text_combine_multiple([
      "an exercise changed and the saved rules-for-a-goal list has fallen behind it - rerun ",
      f_name,
    ]),
  });
}
