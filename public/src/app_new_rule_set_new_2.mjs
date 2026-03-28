import { app_replace_rule_set_statements_simple_abbreviation_sm } from "../../../love/public/src/app_replace_rule_set_statements_simple_abbreviation_sm.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  list_add_multiple(rules, ["bs > { smg }", "smg > sm", "smg > smg sm"]);
  let abbreviations = {};
  app_replace_rule_set_statements_simple_abbreviation_sm(abbreviations);
  let r = {
    name: "TODO",
    rules,
    abbreviations,
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
