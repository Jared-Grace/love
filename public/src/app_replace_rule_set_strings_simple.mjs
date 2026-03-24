import { app_replace_rule_parse } from "../../../love/public/src/app_replace_rule_parse.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { app_replace_rule_set_identifiers_simple_goals } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_goals.mjs";
import { app_replace_rule_set_strings_simple_rules_base } from "../../../love/public/src/app_replace_rule_set_strings_simple_rules_base.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
export function app_replace_rule_set_strings_simple() {
  const rules = app_replace_rule_set_strings_simple_rules_base();
  let concated = list_concat(["st > ida"], rules);
  let goals = app_replace_rule_set_identifiers_simple_goals();
  function lambda(g) {
    let end2 = property_get(g, "end");
    let v = app_replace_rule_parse(rule);
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
