import { app_replace_rule_set_expresions_additive_abbreviations } from "../../../love/public/src/app_replace_rule_set_expresions_additive_abbreviations.mjs";
import { app_replace_rule_set_expresions_additive_rules } from "../../../love/public/src/app_replace_rule_set_expresions_additive_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_additive() {
  const rules = [];
  app_replace_rule_set_expresions_additive_rules(rules);
  list_add(rules, "ex > ade");
  let abbreviations = {};
  app_replace_rule_set_expresions_additive_abbreviations(abbreviations);
  let r = {
    name: "Expressions Additive",
    rules: rules,
    abbreviations,
    goals: [
      {
        start: "ade",
        end: "ce ao ce",
      },
      {
        start: "ce ao ce",
        end: "nu ao ce",
      },
      {
        start: "nu ao ce",
        end: "nu ao nu",
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
        end: "nu ao ( ade ao mue )",
      },
      {
        start: "nu ao ( ade ao ue )",
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
        start: "ade",
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
      {
        start: "nu ao nu mo ce",
        end: "nu ao nu mo nu",
      },
      {
        start: "nu ao nu mo ce",
        end: "nu - nu mo nu",
      },
      {
        start: "nu - nu mo nu",
        end: "nu - nu / nu",
      },
      {
        start: "nu - nu / nu",
        end: "1 - 3 . 1 4 / 2",
      },
      {
        start: "ade",
        end: "ce",
      },
      {
        start: "ce",
        end: "ce ( ade )",
      },
      {
        start: "ce ( ade )",
        end: "id ( ade )",
      },
      {
        start: "id ( ade )",
        end: "id ( ce ao ce )",
      },
      {
        start: "id ( ce ao ce )",
        end: "id ( nu ao ce )",
      },
      {
        start: "id ( nu ao ce )",
        end: "id ( nu ao nu )",
      },
      {
        start: "id ( nu ao nu )",
        end: "id ( 1 + 2 )",
      },
    ],
    why: "These replacement rules define a context-free grammar for arithmetic and function call expressions, demonstrating how identifiers, literals, operators, and parentheses combine to form valid additive expressions similar to those in programming languages like JavaScript.",
  };
  return r;
}
