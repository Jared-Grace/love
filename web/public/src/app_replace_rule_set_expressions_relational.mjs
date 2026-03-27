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
    name: "Expressions Relational",
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
        end: "1 < ( ade ao mue )",
      },
      {
        start: "1 < ( ade ao mue )",
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
    why: "These replacement rules define a context-free grammar for arithmetic and relational expressions, demonstrating how identifiers, literals, member access, function calls, unary and binary operations, and relational comparisons are constructed and combined, reflecting the syntax of a typical programming language's expression evaluation.",
  };
  return r;
}
