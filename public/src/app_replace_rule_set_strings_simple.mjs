import { property_set } from "../../../love/public/src/property_set.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { text_size_1 } from "../../../love/public/src/text_size_1.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
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
    let a = list_all(end, text_size_1);
    return a;
  }
  let filtered = list_filter(goals, lambda);
  function lambda2(g) {
    let value2 = property_set(g, "start", "st");
  }
  each(filtered, lambda2);
  log(app_replace_rule_set_strings_simple.name, {
    filtered,
  });
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
