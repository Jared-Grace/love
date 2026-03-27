import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_equality_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_equality_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expressions_equality_rules } from "../../../love/public/src/app_replace_rule_set_expressions_equality_rules.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_expressions_equality_rules(rules);
  list_add_multiple(rules, ["le > ee", "le > le lo ee", "lo > &&", "lo > ||"]);
  list_add(rules, "ex > le");
  let abbreviations = {};
  app_replace_rule_set_expressions_equality_abbreviations(abbreviations);
  let r = {
    name: "Logical Expressions",
    rules,
    abbreviations,
    goals: [
      {
        start: "le",
        end: "re lo re",
      },
      {
        start: "re lo re",
        end: "mue lo mue",
      },
      {
        start: "mue lo mue",
        end: "mae lo mae",
      },
      {
        start: "mae lo mae",
        end: "lit lo lit",
      },
      {
        start: "lit lo lit",
        end: "true lo false",
      },
    ],
  };
  return r;
}
