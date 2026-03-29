import { app_replace_rule_set_expressions_unary_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_unary_abbreviations.mjs";
import { app_replace_rule_set_expressions_unary_rules } from "../../../love/public/src/app_replace_rule_set_expressions_unary_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_unary() {
  const rules = [];
  app_replace_rule_set_expressions_unary_rules(rules);
  list_add(rules, "ex > ue");
  let abbreviations = {};
  app_replace_rule_set_expressions_unary_abbreviations(abbreviations);
  let r = {
    name: "Expressions Unary",
    rules,
    abbreviations,
    goals: [
      {
        start: "ue",
        end: "uo li",
      },
      {
        start: "uo li",
        end: "- 2",
      },
      {
        start: "uo li",
        end: "! true",
      },
      {
        start: "uo li",
        end: "+ 3 . 1 4",
      },
      {
        start: "uo li",
        end: "typeof null",
      },
      {
        start: "ue",
        end: "- ( ex )",
      },
      {
        start: "- ( ex )",
        end: "- ( - li )",
      },
      {
        start: "- ( - li )",
        end: "- ( - 1 )",
      },
    ],
    why: "The replacement rules define a grammar for parsing unary expressions in a programming language, including identifiers, literals (numbers, strings, booleans, null), member access, function calls, and unary operators like !, -, +, and typeof, demonstrating how complex expressions are built from simpler components.",
    rules_used: [
      [
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
          right: ["uo", "ue"],
          original: "ue > uo ue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
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
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
        },
      ],
      [
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["uo"],
          right: ["!"],
          original: "uo > !",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["uo"],
          right: ["+"],
          original: "uo > +",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
      ],
      [
        {
          left: ["uo"],
          right: ["typeof"],
          original: "uo > typeof",
        },
        {
          left: ["li"],
          right: ["null"],
          original: "li > null",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["uo", "ue"],
          original: "ue > uo ue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
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
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ue"],
          right: ["uo", "ue"],
          original: "ue > uo ue",
        },
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
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
          left: ["ex"],
          right: ["ue"],
          original: "ex > ue",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
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
      ],
    ],
  };
  return r;
}
