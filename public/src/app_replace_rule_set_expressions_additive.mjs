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
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
      ],
      [
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["ex"],
          right: ["ade"],
          original: "ex > ade",
        },
        {
          left: ["id"],
          right: ["r", "e", "f", "r", "e", "s", "h"],
          original: "id > r e f r e s h",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mue"],
          right: ["mue", "mo", "ue"],
          original: "mue > mue mo ue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["uo"],
          right: ["typeof"],
          original: "uo > typeof",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
      ],
      [
        {
          left: ["id"],
          right: ["a", "l", "l"],
          original: "id > a l l",
        },
        {
          left: ["uo"],
          right: ["typeof"],
          original: "uo > typeof",
        },
        {
          left: ["mo"],
          right: ["/"],
          original: "mo > /",
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["ag"],
          right: ["ex"],
          original: "ag > ex",
        },
        {
          left: ["ce"],
          right: ["ce", "(", "ag", ")"],
          original: "ce > ce ( ag )",
        },
        {
          left: ["ex"],
          right: ["ade"],
          original: "ex > ade",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ade"],
          original: "ex > ade",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["id"],
          right: ["d", "o", "o", "r"],
          original: "id > d o o r",
        },
      ],
      [
        {
          left: ["id"],
          right: ["b", "u", "i", "l", "d", "i", "n", "g"],
          original: "id > b u i l d i n g",
        },
        {
          left: ["ag"],
          right: ["ex", ",", "ag"],
          original: "ag > ex , ag",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["uo"],
          right: ["+"],
          original: "uo > +",
        },
      ],
      [
        {
          left: ["id"],
          right: ["d", "o", "u", "b", "l", "e"],
          original: "id > d o u b l e",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
    ],
  };
  return r;
}
