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
        end: "id ( ue ao ue )",
      },
      {
        start: "id ( ue ao ue )",
        end: "id ( ce ao ce )",
      },
      {
        start: "id ( ce ao ce )",
        end: "id ( mae ao mae )",
      },
      {
        start: "id ( mae ao mae )",
        end: "id ( li ao li )",
      },
      {
        start: "id ( li ao li )",
        end: "id ( nu ao nu )",
      },
      {
        start: "id ( nu ao nu )",
        end: "d o u b l e ( 1 + 2 )",
      },
    ],
    why: "These replacement rules define a context-free grammar for parsing additive expressions, including identifiers, literals (numbers, strings, booleans, null), member access, function calls, unary and binary operations (additive and multiplicative), and grouping with parentheses, demonstrating the structure and precedence of expressions similar to those in programming languages like JavaScript.",
    rules_used: [
      [
        {
          left: ["ade"],
          right: ["mue"],
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
        },
        {
          left: ["mue"],
          right: ["ue"],
        },
        {
          left: ["ue"],
          right: ["ce"],
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
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
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
          left: ["ao"],
          right: ["-"],
        },
      ],
      [
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
        },
        {
          left: ["in"],
          right: ["2"],
        },
        {
          left: ["ao"],
          right: ["+"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
        {
          left: ["nu"],
          right: ["de"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ade"],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["mue"],
          right: ["ue"],
        },
        {
          left: ["ue"],
          right: ["ce"],
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
          left: ["ue"],
          right: ["ce"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
      ],
      [
        {
          left: ["ao"],
          right: ["-"],
        },
        {
          left: ["ao"],
          right: ["+"],
        },
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
      ],
      [
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
        },
        {
          left: ["mue"],
          right: ["mue", "mo", "ue"],
        },
        {
          left: ["mue"],
          right: ["ue"],
        },
        {
          left: ["ade"],
          right: ["mue"],
        },
        {
          left: ["ue"],
          right: ["ce"],
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
        },
        {
          left: ["ue"],
          right: ["ce"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
        },
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
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["ao"],
          right: ["-"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
      ],
      [
        {
          left: ["id"],
          right: ["d", "o", "u", "b", "l", "e"],
        },
        {
          left: ["mo"],
          right: ["/"],
        },
        {
          left: ["id"],
          right: ["d", "o", "o", "r"],
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
        },
        {
          left: ["in"],
          right: ["1"],
        },
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
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
        },
        {
          left: ["ade"],
          right: ["mue"],
        },
        {
          left: ["ue"],
          right: ["ce"],
        },
      ],
      [
        {
          left: ["ag"],
          right: ["ex"],
        },
        {
          left: ["ce"],
          right: ["ce", "(", "ag", ")"],
        },
        {
          left: ["ex"],
          right: ["ade"],
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
      ],
      [
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
        },
        {
          left: ["ade"],
          right: ["mue"],
        },
        {
          left: ["mue"],
          right: ["ue"],
        },
      ],
      [
        {
          left: ["bo"],
          right: ["true"],
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
        },
        {
          left: ["ue"],
          right: ["ce"],
        },
      ],
      [
        {
          left: ["li"],
          right: ["bo"],
        },
        {
          left: ["mue"],
          right: ["mue", "mo", "ue"],
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
          left: ["id"],
          right: ["r", "e", "f", "r", "e", "s", "h"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
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
          left: ["ao"],
          right: ["+"],
        },
        {
          left: ["id"],
          right: ["d", "o", "u", "b", "l", "e"],
        },
        {
          left: ["in"],
          right: ["1"],
        },
        {
          left: ["in"],
          right: ["2"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
      ],
    ],
  };
  return r;
}
