import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expressions_relational_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_relational_abbreviations.mjs";
import { app_replace_rule_set_expressions_relational_rules } from "../../../love/public/src/app_replace_rule_set_expressions_relational_rules.mjs";
export function app_replace_rule_set_expressions_relational() {
  const rules = [];
  app_replace_rule_set_expressions_relational_rules(rules);
  let abbreviations = {};
  list_add(rules, "ex > re");
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
        end: "1 < ( ue + ue )",
      },
      {
        start: "1 < ( ue + ue )",
        end: "1 < ( mae + mae )",
      },
      {
        start: "1 < ( mae + mae )",
        end: "1 < ( nu + nu )",
      },
      {
        start: "1 < ( nu + nu )",
        end: "1 < ( 2 + 3 . 1 4 )",
      },
    ],
    why: "The replacement rules demonstrate the grammar for parsing relational expressions (like < and >) involving identifiers, literals, arithmetic, member access, function calls, and grouping, showing how complex expressions are built from simpler components.",
  };
  return r;
}
