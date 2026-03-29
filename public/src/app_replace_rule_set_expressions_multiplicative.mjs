import { app_replace_rule_set_expressions_multiplicative_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_multiplicative_abbreviations.mjs";
import { app_replace_rule_set_expressions_multiplicative_rules } from "../../../love/public/src/app_replace_rule_set_expressions_multiplicative_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_multiplicative() {
  const rules = [];
  app_replace_rule_set_expressions_multiplicative_rules(rules);
  list_add(rules, "ex > mue");
  let abbreviations = {};
  app_replace_rule_set_expressions_multiplicative_abbreviations(abbreviations);
  let r = {
    name: "Expressions Multiplicative",
    rules,
    abbreviations,
    goals: [
      {
        start: "mue",
        end: "mae mo mae",
      },
      {
        start: "mae mo mae",
        end: "nu mo mae",
      },
      {
        start: "nu mo mae",
        end: "nu mo nu",
      },
      {
        start: "nu mo nu",
        end: "1 / 2",
      },
      {
        start: "nu mo nu",
        end: "3 . 1 4 * 2",
      },
      {
        start: "nu mo mae",
        end: "nu mo ( ex )",
      },
      {
        start: "nu mo ( ex )",
        end: "nu mo ( mue mo ue )",
      },
      {
        start: "nu mo ( mue mo ue )",
        end: "nu mo ( pe mo ue )",
      },
      {
        start: "nu mo ( pe mo ue )",
        end: "nu mo ( nu mo pe )",
      },
      {
        start: "nu mo ( nu mo pe )",
        end: "nu mo ( nu mo nu )",
      },
      {
        start: "nu mo ( nu mo nu )",
        end: "3 . 1 4 / ( 2 * 2 )",
      },
    ],
    why: "These replacement rules define a context-free grammar for parsing multiplicative expressions, including identifiers, literals (numbers, strings, booleans, null), member access, function calls, unary and multiplicative operators, demonstrating how complex expressions are constructed from simpler components in a programming language.",
    rules_used: [
      [
        {
          left: ["mue"],
          right: ["mue", "mo", "ue"],
        },
        {
          left: ["ue"],
          right: ["ce"],
        },
        {
          left: ["mue"],
          right: ["ue"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
      ],
      [
        {
          left: ["mo"],
          right: ["/"],
        },
        {
          left: ["in"],
          right: ["2"],
        },
        {
          left: ["in"],
          right: ["1"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
        },
        {
          left: ["nu"],
          right: ["de"],
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
        },
        {
          left: ["mo"],
          right: ["*"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
        },
      ],
      [
        {
          left: ["ex"],
          right: ["mue"],
        },
        {
          left: ["uo"],
          right: ["typeof"],
        },
        {
          left: ["mue"],
          right: ["mue", "mo", "ue"],
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["mue"],
          right: ["ue"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["ue"],
          right: ["ce"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
      ],
      [
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
        },
        {
          left: ["nu"],
          right: ["de"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
        {
          left: ["in"],
          right: ["2"],
        },
        {
          left: ["mo"],
          right: ["*"],
        },
        {
          left: ["mo"],
          right: ["/"],
        },
      ],
    ],
  };
  return r;
}
