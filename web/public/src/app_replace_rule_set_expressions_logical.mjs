import { app_replace_rule_set_logical_expressions_rules } from "../../../love/public/src/app_replace_rule_set_logical_expressions_rules.mjs";
import { app_replace_rule_set_logical_expressions_abbreviations } from "../../../love/public/src/app_replace_rule_set_logical_expressions_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_logical() {
  const rules = [];
  app_replace_rule_set_logical_expressions_rules(rules);
  list_add(rules, "ex > le");
  let abbreviations = {};
  app_replace_rule_set_logical_expressions_abbreviations(abbreviations);
  let r = {
    name: "Expressions Logical",
    rules,
    abbreviations,
    goals: [
      {
        start: "le",
        end: "re lo re",
      },
      {
        start: "re lo re",
        end: "mue lo mue",
      },
      {
        start: "mue lo mue",
        end: "mae lo mae",
      },
      {
        start: "mae lo mae",
        end: "li lo li",
      },
      {
        start: "pe lo pe",
        end: "true && false",
      },
      {
        start: "pe lo pe",
        end: "false || true",
      },
      {
        start: "pe lo pe",
        end: "( le ) && true",
      },
      {
        start: "( le ) && true",
        end: "( re || re ) && true",
      },
      {
        start: "( re || re ) && true",
        end: "( mue || mue ) && true",
      },
      {
        start: "( mue || mue ) && true",
        end: "( mae || mae ) && true",
      },
      {
        start: "( mae || mae ) && true",
        end: "( li || li ) && true",
      },
      {
        start: "( li || li ) && true",
        end: "( true || false ) && true",
      },
    ],
    why: "These replacement rules define a context-free grammar for logical and arithmetic expressions, demonstrating how identifiers, literals, operators, and grouping can be combined to form valid expressions similar to those in programming languages like JavaScript.",
    rules_used: [
      [
        {
          left: ["le"],
          right: ["le", "lo", "ee"],
          original: "le > le lo ee",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
      ],
      [
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
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
          right: ["y"],
          original: "id > y",
        },
      ],
      [
        {
          left: ["lo"],
          right: ["&&"],
          original: "lo > &&",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
      ],
      [
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["lo"],
          right: ["||"],
          original: "lo > ||",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["le"],
          original: "ex > le",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
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
        {
          left: ["lo"],
          right: ["&&"],
          original: "lo > &&",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
      ],
      [
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["le"],
          right: ["le", "lo", "ee"],
          original: "le > le lo ee",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["lo"],
          right: ["||"],
          original: "lo > ||",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
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
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
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
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
      ],
    ],
  };
  return r;
}
