import { js_keyword_null } from "./js_keyword_null.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { app_replace_rule_set_expressions_primary_abbreviations } from "./app_replace_rule_set_expressions_primary_abbreviations.mjs";
import { app_replace_rule_set_expressions_primary_rules } from "./app_replace_rule_set_expressions_primary_rules.mjs";
import { list_add } from "./list_add.mjs";
export function app_replace_rule_set_expressions_primary() {
  let rules = [];
  app_replace_rule_set_expressions_primary_rules(rules);
  list_add(rules, "ex > pe");
  let abbreviations = {};
  app_replace_rule_set_expressions_primary_abbreviations(abbreviations);
  let r = {
    name: "Expressions Primary",
    abbreviations,
    rules: rules,
    goals: [
      {
        start: "pe",
        end: "id",
      },
      {
        start: "pe",
        end: "x",
      },
      {
        start: "pe",
        end: js_keyword_true(),
      },
      {
        start: "pe",
        end: js_keyword_false(),
      },
      {
        start: "pe",
        end: "1",
      },
      {
        start: "pe",
        end: "3.14",
      },
      {
        start: "pe",
        end: '"luv"',
      },
      {
        start: "pe",
        end: js_keyword_null(),
      },
      {
        start: "pe",
        end: "( ex )",
      },
      {
        start: "pe",
        end: "( pe )",
      },
      {
        start: "pe",
        end: "( id )",
      },
      {
        start: "pe",
        end: "( y )",
      },
      {
        start: "pe",
        end: "( ( ex ) )",
      },
    ],
    why: "These replacement rules define the syntax for primary expressions in a simple expression grammar, allowing identifiers, literals (numbers, strings, booleans, null), and parenthesized expressions, demonstrating how basic building blocks of expressions are constructed and nested.",
  };
  return r;
}
