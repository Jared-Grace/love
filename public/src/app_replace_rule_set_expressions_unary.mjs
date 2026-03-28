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
    why: "The replacement rules define a grammar for unary expressions in a programming language, demonstrating how primary expressions (identifiers, literals, parenthesized expressions) can be combined with unary operators (like !, -, +, typeof) and member/call expressions to form valid unary expressions, reflecting the structure of JavaScript-like expression syntax.",
  };
  return r;
}
