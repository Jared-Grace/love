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
    why: "These replacement rules define a context-free grammar for logical and arithmetic expressions similar to those in JavaScript, demonstrating operator precedence, associativity, and the structure of primary, unary, multiplicative, additive, relational, equality, and logical expressions.",
  };
  return r;
}
