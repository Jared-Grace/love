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
          right: ["ee"],
        },
        {
          left: ["le"],
          right: ["le", "lo", "ee"],
        },
        {
          left: ["ee"],
          right: ["re"],
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
        },
        {
          left: ["re"],
          right: ["ade"],
        },
        {
          left: ["li"],
          right: ["null"],
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
          left: ["mae"],
          right: ["mle"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
      ],
      [
        {
          left: ["lo"],
          right: ["&&"],
        },
        {
          left: ["bo"],
          right: ["false"],
        },
        {
          left: ["bo"],
          right: ["true"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["li"],
          right: ["bo"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["bo"],
          right: ["true"],
        },
        {
          left: ["li"],
          right: ["bo"],
        },
        {
          left: ["lo"],
          right: ["||"],
        },
        {
          left: ["bo"],
          right: ["false"],
        },
      ],
      [
        {
          left: ["bo"],
          right: ["true"],
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["lo"],
          right: ["&&"],
        },
        {
          left: ["li"],
          right: ["bo"],
        },
        {
          left: ["ex"],
          right: ["le"],
        },
      ],
      [
        {
          left: ["le"],
          right: ["ee"],
        },
        {
          left: ["ee"],
          right: ["re"],
        },
        {
          left: ["le"],
          right: ["le", "lo", "ee"],
        },
        {
          left: ["lo"],
          right: ["||"],
        },
      ],
      [
        {
          left: ["re"],
          right: ["ade"],
        },
        {
          left: ["lo"],
          right: ["||"],
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
          left: ["in"],
          right: ["1"],
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
          left: ["bo"],
          right: ["true"],
        },
        {
          left: ["li"],
          right: ["bo"],
        },
        {
          left: ["bo"],
          right: ["false"],
        },
      ],
    ],
  };
  return r;
}
