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
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
          original: "re > re ro ade",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ro"],
          right: ["<"],
          original: "ro > <",
        },
      ],
      [
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
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
          original: "re > re ro ade",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["id"],
          right: ["u", "p", "d", "a", "t", "e"],
          original: "id > u p d a t e",
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
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
      ],
      [
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
          original: "re > re ro ade",
        },
        {
          left: ["ro"],
          right: [">"],
          original: "ro > >>",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
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
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["id"],
          right: ["b", "u", "i", "l", "d", "i", "n", "g"],
          original: "id > b u i l d i n g",
        },
      ],
      [
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
          original: "re > re ro ade",
        },
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
      ],
      [
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
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
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
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
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
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ex"],
          right: ["re"],
          original: "ex > re",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
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
          left: ["ro"],
          right: ["<"],
          original: "ro > <",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
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
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
      ],
    ],
  };
  return r;
}
