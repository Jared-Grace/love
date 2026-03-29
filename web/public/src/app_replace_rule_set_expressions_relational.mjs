import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expressions_relational_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_relational_abbreviations.mjs";
import { app_replace_rule_set_expressions_relational_rules } from "../../../love/public/src/app_replace_rule_set_expressions_relational_rules.mjs";
export function app_replace_rule_set_expressions_relational() {
  const rules = [];
  app_replace_rule_set_expressions_relational_rules(rules);
  list_add(rules, "ex > re");
  let abbreviations = {};
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
        end: "li < li",
      },
      {
        start: "li < li",
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
        end: "li > li",
      },
      {
        start: "li > li",
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
        end: "1 < ( li + li )",
      },
      {
        start: "1 < ( li + li )",
        end: "1 < ( nu + nu )",
      },
      {
        start: "1 < ( nu + nu )",
        end: "1 < ( 2 + 3 . 1 4 )",
      },
    ],
    why: "The replacement rules define a context-free grammar for parsing arithmetic and relational expressions, including identifiers, literals, member access, function calls, unary and binary operators, and relational comparisons, demonstrating how complex expressions are constructed from simpler components.",
    rules_used: [
      [
        {
          left: ["re"],
          right: ["ade"],
        },
        {
          left: ["ade"],
          right: ["mue"],
        },
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
        },
        {
          left: ["ro"],
          right: ["<"],
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
          left: ["mue"],
          right: ["ue"],
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["ex"],
          right: ["re"],
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
          left: ["id"],
          right: ["y"],
        },
        {
          left: ["id"],
          right: ["b", "u", "i", "l", "d", "i", "n", "g"],
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
      ],
      [
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
        },
        {
          left: ["ade"],
          right: ["mue"],
        },
        {
          left: ["re"],
          right: ["ade"],
        },
        {
          left: ["ro"],
          right: [">"],
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["ue"],
          right: ["ce"],
        },
        {
          left: ["mue"],
          right: ["ue"],
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["id"],
          right: ["b", "u", "i", "l", "d", "i", "n", "g"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
      ],
      [
        {
          left: ["ag"],
          right: ["ex"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["li"],
          right: ["st"],
        },
      ],
      [
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
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
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
          left: ["in"],
          right: ["1"],
        },
        {
          left: ["re"],
          right: ["ade"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
        {
          left: ["ex"],
          right: ["re"],
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
        },
        {
          left: ["ao"],
          right: ["+"],
        },
        {
          left: ["ade"],
          right: ["mue"],
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
        },
        {
          left: ["id"],
          right: ["u", "p", "d", "a", "t", "e"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
      ],
      [
        {
          left: ["id"],
          right: ["l", "o", "v", "e"],
        },
        {
          left: ["uo"],
          right: ["typeof"],
        },
        {
          left: ["li"],
          right: ["nu"],
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
          left: ["nu"],
          right: ["in"],
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
        },
      ],
    ],
  };
  return r;
}
