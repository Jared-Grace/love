import { app_replace_rule_set_expressions_equality_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_equality_abbreviations.mjs";
import { app_replace_rule_set_expressions_equality_rules } from "../../../love/public/src/app_replace_rule_set_expressions_equality_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_equality() {
  const rules = [];
  app_replace_rule_set_expressions_equality_rules(rules);
  list_add(rules, "ex > ee");
  let abbreviations = {};
  app_replace_rule_set_expressions_equality_abbreviations(abbreviations);
  let r = {
    name: "Expressions Equality",
    abbreviations,
    rules,
    goals: [
      {
        start: "ee",
        end: "mue === mue",
      },
      {
        start: "mue === mue",
        end: "mae === mae",
      },
      {
        start: "mae === mae",
        end: "pe === pe",
      },
      {
        start: "mae === mae",
        end: "li === li",
      },
      {
        start: "li === li",
        end: "nu === nu",
      },
      {
        start: "nu === nu",
        end: "1 === 1",
      },
      {
        start: "pe === pe",
        end: "( ade ao mue ) === pe",
      },
      {
        start: "( ade ao mue ) === pe",
        end: "( ue ao ue ) === pe",
      },
      {
        start: "( ue ao ue ) === pe",
        end: "( mae ao mae ) === pe",
      },
      {
        start: "( mae ao mae ) === pe",
        end: "( pe ao pe ) === pe",
      },
      {
        start: "( pe ao pe ) === pe",
        end: "( li ao li ) === li",
      },
      {
        start: "( li ao li ) === li",
        end: "( nu ao nu ) === nu",
      },
      {
        start: "( nu ao nu ) === nu",
        end: "( 1 + 1 ) === 2",
      },
      {
        start: "( nu ao nu ) === nu",
        end: "( 2 - 1 ) === 1",
      },
    ],
    why: "The replacement rules define a grammar for parsing and evaluating equality between expressions, particularly focusing on arithmetic, member access, function calls, and literal values, demonstrating how complex expressions can be reduced and compared for equality using '==='.",
    rules_used: [
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["ee"],
          right: ["ee", "===", "re"],
          original: "ee > ee === re",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
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
      ],
      [
        {
          left: ["mo"],
          right: ["/"],
          original: "mo > /",
        },
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
          left: ["ag"],
          right: ["ex", ",", "ag"],
          original: "ag > ex , ag",
        },
      ],
      [
        {
          left: ["id"],
          right: ["a", "d", "d"],
          original: "id > a d d",
        },
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
      ],
      [
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
          left: ["ag"],
          right: ["ex", ",", "ag"],
          original: "ag > ex , ag",
        },
      ],
      [
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["ex"],
          right: ["ee"],
          original: "ex > ee",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["id"],
          right: ["u", "p", "d", "a", "t", "e"],
          original: "id > u p d a t e",
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
          left: ["st"],
          right: ['"', "l", "u", "v", '"'],
          original: 'st > " l u v "',
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
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["id"],
          right: ["l", "i", "s", "t"],
          original: "id > l i s t",
        },
      ],
      [
        {
          left: ["ee"],
          right: ["ee", "===", "re"],
          original: "ee > ee === re",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
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
          right: ["+"],
          original: "ao > +",
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
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
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
      ],
    ],
  };
  return r;
}
