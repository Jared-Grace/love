import { app_replace_rule_set_statements_simple_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_simple_abbreviations.mjs";
import { app_replace_rule_set_statements_simple_rules } from "../../../love/public/src/app_replace_rule_set_statements_simple_rules.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_statements_simple_rules(rules);
  list_add_multiple(rules, ["bs > { smg }", "smg > sm", "smg > smg sm"]);
  let abbreviations = {};
  app_replace_rule_set_statements_simple_abbreviations(abbreviations);
  object_merge(abbreviations, {
    sm: ["", "s", "tate", "m", "ent ", "g", "rower"],
  });
  let r = {
    name: "Statements Block",
    rules,
    abbreviations,
    goals: [
      {
        start: "bs",
        end: "{ sm }",
      },
    ],
  };
  return r;
}
