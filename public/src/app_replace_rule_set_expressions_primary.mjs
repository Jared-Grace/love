import { app_replace_rule_set_expressions_primary_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviations.mjs";
import { app_replace_rule_set_expressions_primary_rules } from "../../../love/public/src/app_replace_rule_set_expressions_primary_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_primary() {
  const rules = [];
  app_replace_rule_set_expressions_primary_rules(rules);
  list_add(rules, "e > pe");
  let abbreviations = {};
  app_replace_rule_set_expressions_primary_abbreviations(abbreviations);
  let r = {
    name: "Expressions primary",
    abbreviations,
    rules: rules,
    goals: [
      {
        start: "pe",
        end: "id",
      },
      {
        start: "pe",
        end: "true",
      },
      {
        start: "pe",
        end: "false",
      },
      {
        start: "pe",
        end: "1",
      },
      {
        start: "pe",
        end: "3 . 1 4",
      },
      {
        start: "pe",
        end: '" l u v "',
      },
      {
        start: "pe",
        end: "null",
      },
      {
        start: "pe",
        end: "( e )",
      },
      {
        start: "pe",
        end: "( pe )",
      },
      {
        start: "pe",
        end: "( id )",
      },
      {
        start: "pe",
        end: "( ( e ) )",
      },
    ],
  };
  return r;
}
