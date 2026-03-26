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
    why: "These replacement rules define a grammar for parsing unary expressions similar to those found in programming languages like JavaScript. The rules demonstrate how literals (numbers, strings, booleans, null), identifiers, parenthesized expressions, member access, function calls, and unary operators (such as !, -, +, typeof) can be combined to form valid expressions. The grammar shows the recursive structure of expressions and how unary operators apply to primary expressions, illustrating the syntactic construction of unary expressions.",
  };
  return r;
}
