import { app_replace_rule_set_expressions_relational_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_relational_abbreviations.mjs";
import { app_replace_rule_set_expressions_relational_rules } from "../../../love/public/src/app_replace_rule_set_expressions_relational_rules.mjs";
export function app_replace_rule_set_expressions_relational() {
  const rules = [];
  app_replace_rule_set_expressions_relational_rules(rules);
  let abbreviations = {};
  app_replace_rule_set_expressions_relational_abbreviations(abbreviations);
  let r = {
    name: "Expressions relational",
    abbreviations,
    rules,
    goals: [
      {
        start: "re",
        end: "mue < mue",
      },
      {
        start: "mue < mue",
        end: "mae < mae",
      },
      {
        start: "mae < mae",
        end: "nu < nu",
      },
      {
        start: "nu < nu",
        end: "1 < 2",
      },
      {
        start: "re",
        end: "mue > mue",
      },
      {
        start: "mue > mue",
        end: "mae > mae",
      },
      {
        start: "mae > mae",
        end: "nu > nu",
      },
      {
        start: "nu > nu",
        end: "1 > 3 . 1 4",
      },
      {
        start: "mae < mae",
        end: "nu < ( ex )",
      },
      {
        start: "nu < ( ex )",
        end: "1 < ( ae ao mue )",
      },
      {
        start: "1 < ( ae ao mue )",
        end: "1 < ( ce + ce )",
      },
    ],
  };
  return r;
}
