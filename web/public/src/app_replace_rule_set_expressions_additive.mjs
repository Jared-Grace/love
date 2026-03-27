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
        end: "cae ao cae",
      },
      {
        start: "cae ao cae",
        end: "nu ao cae",
      },
      {
        start: "nu ao cae",
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
        start: "nu ao cae",
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
        end: "cae ao mue mo ue",
      },
      {
        start: "cae ao mue mo ue",
        end: "cae ao cae mo cae",
      },
      {
        start: "cae ao cae mo cae",
        end: "nu ao cae mo cae",
      },
      {
        start: "nu ao cae mo cae",
        end: "nu ao nu mo cae",
      },
      {
        start: "nu ao nu mo cae",
        end: "nu ao nu mo nu",
      },
      {
        start: "nu ao nu mo cae",
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
        start: "ae",
        end: "cae",
      },
      {
        start: "cae",
        end: "cae ( ae )",
      },
      {
        start: "cae ( ae )",
        end: "id ( ae )",
      },
      {
        start: "id ( ae )",
        end: "id ( cae ao cae )",
      },
      {
        start: "id ( cae ao cae )",
        end: "id ( nu ao cae )",
      },
      {
        start: "id ( nu ao cae )",
        end: "id ( nu ao nu )",
      },
      {
        start: "id ( nu ao nu )",
        end: "id ( 1 + 2 )",
      },
    ],
    why: "The replacement rules define a context-free grammar for parsing arithmetic and function call expressions similar to those in JavaScript, including literals, identifiers, unary and binary operators, function calls, and member access, demonstrating how complex expressions are constructed from simpler components.",
  };
  return r;
}
