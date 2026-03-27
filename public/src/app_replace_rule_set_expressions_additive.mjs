import { app_replace_rule_set_expresions_additive_abbreviations } from "../../../love/public/src/app_replace_rule_set_expresions_additive_abbreviations.mjs";
import { app_replace_rule_set_expresions_additive_rules } from "../../../love/public/src/app_replace_rule_set_expresions_additive_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_additive() {
  const rules = [];
  app_replace_rule_set_expresions_additive_rules(rules);
  list_add(rules, "ex > ae");
  let abbreviations = {};
  app_replace_rule_set_expresions_additive_abbreviations(abbreviations);
  let r = {
    name: "Expressions Additive",
    rules: rules,
    abbreviations,
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
      {
        start: "ae",
        end: "ce ao mue mo ue",
      },
      {
        start: "ce ao mue mo ue",
        end: "ce ao ce mo ce",
      },
      {
        start: "ce ao ce mo ce",
        end: "nu ao ce mo ce",
      },
      {
        start: "nu ao ce mo ce",
        end: "nu ao nu mo ce",
      },
    ],
    why: "The replacement rules define a context-free grammar for parsing arithmetic and function call expressions similar to those in JavaScript, including literals, identifiers, unary and binary operators, function calls, and member access, demonstrating how complex expressions are constructed from simpler components.",
  };
  return r;
}
