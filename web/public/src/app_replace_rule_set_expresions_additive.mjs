import { app_replace_rule_set_expresions_additive_abbreviations } from "../../../love/public/src/app_replace_rule_set_expresions_additive_abbreviations.mjs";
import { app_replace_rule_set_expresions_additive_rules } from "../../../love/public/src/app_replace_rule_set_expresions_additive_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expresions_additive() {
  const rules = [];
  app_replace_rule_set_expresions_additive_rules(rules);
  list_add(rules, "ex > ae");
  let abbreviations = {};
  app_replace_rule_set_expresions_additive_abbreviations(abbreviations);
  let r = {
    name: "Expressions additive",
    rules: rules,
    goals: [
      {
        start: "ae",
        end: "ce mo ce",
      },
      {
        start: "ce mo ce",
        end: "nu mo mae",
      },
      {
        start: "nu mo ce",
        end: "nu mo nu",
      },
      {
        start: "nu ao nu",
        end: "1 - 2",
      },
      {
        start: "nu ao nu",
        end: "3 . 1 4 + 2",
      },
      {
        start: "nu ao ce",
        end: "nu ao ( ex )",
      },
      {
        start: "nu ao ( ex )",
        end: "nu ao ( ae ao mue )",
      },
      {
        start: "nu ao ( ae ao ue )",
        end: "nu ao ( mae ao ue )",
      },
      {
        start: "nu ao ( mae ao ue )",
        end: "nu ao ( nu ao ue )",
      },
      {
        start: "nu ao ( nu ao ue )",
        end: "nu ao ( nu ao nu )",
      },
      {
        start: "nu ao ( nu ao nu )",
        end: "3 . 1 4 - ( 2 + 2 )",
      },
    ],
  };
  return r;
}
