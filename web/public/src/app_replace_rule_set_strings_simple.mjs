import { app_replace_end_get } from "../../../love/public/src/app_replace_end_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { app_replace_rule_set_identifiers_simple_goals } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_goals.mjs";
import { app_replace_rule_set_strings_simple_rules_base } from "../../../love/public/src/app_replace_rule_set_strings_simple_rules_base.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
export function app_replace_rule_set_strings_simple() {
  const rules = app_replace_rule_set_strings_simple_rules_base();
  let concated = list_concat(["st > ida"], rules);
  let goals = app_replace_rule_set_identifiers_simple_goals();
  function lambda(g) {
    let end = app_replace_end_get(g);
    log(app_replace_rule_set_strings_simple.name, {
      end,
    });
  }
  let filtered = list_filter(goals, lambda);
  let r = {
    name: "Strings simple",
    rules: concated,
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
