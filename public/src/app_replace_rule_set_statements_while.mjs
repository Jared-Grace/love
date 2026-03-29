import { app_replace_rule_set_statements_while_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_while_abbreviations.mjs";
import { app_replace_rule_set_statements_while_rules } from "../../../love/public/src/app_replace_rule_set_statements_while_rules.mjs";
import { js_keyword_while } from "../../../love/public/src/js_keyword_while.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_statements_while() {
  const rules = [];
  app_replace_rule_set_statements_while_rules(rules);
  list_add_multiple(rules, [
    "ex > y > 0",
    "ex > x < 3",
    "ex > x = x + 1",
    "ex > y = y - 1",
    "ex > ! f o u n d ( d o o r )",
    "ex > a s k ( )",
    "ex > s e e k ( )",
  ]);
  let abbreviations = {};
  app_replace_rule_set_statements_while_abbreviations(abbreviations);
  let r = {
    name: "Statements While",
    rules,
    abbreviations,
    goals: [
      {
        start: "ws",
        end: js_keyword_while() + " ( x < 3 ) x = x + 1 ;",
      },
      {
        start: "ws",
        end: js_keyword_while() + " ( y > 0 ) { y = y - 1 ; }",
      },
      {
        start: "ws",
        end: js_keyword_while() + " ( ! f o u n d ( d o o r ) ) { sm sm }",
      },
      {
        start: js_keyword_while() + " ( ! f o u n d ( d o o r ) ) { sm sm }",
        end:
          js_keyword_while() +
          " ( ! f o u n d ( d o o r ) ) { a s k ( ) ; s e e k ( ) ; }",
      },
    ],
    why: "The replacement rules define a grammar for JavaScript-like while statements, including variable declarations, expressions, blocks, and if-else statements, demonstrating how complex control flow and statement grouping are constructed from simpler syntactic elements.",
    rules_used: [
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
        },
        {
          left: ["ws"],
          right: ["while", "(", "ex", ")", "sm"],
        },
        {
          left: ["ex"],
          right: ["x", "<", "3"],
        },
        {
          left: ["ex"],
          right: ["x", "=", "x", "+", "1"],
        },
      ],
      [
        {
          left: ["ws"],
          right: ["while", "(", "ex", ")", "sm"],
        },
        {
          left: ["sm"],
          right: ["bs"],
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
        },
        {
          left: ["ex"],
          right: ["y", "=", "y", "-", "1"],
        },
        {
          left: ["smg"],
          right: ["sm"],
        },
        {
          left: ["ex"],
          right: ["y", ">", "0"],
        },
      ],
      [
        {
          left: ["ws"],
          right: ["while", "(", "ex", ")", "sm"],
        },
        {
          left: ["ex"],
          right: ["!", "f", "o", "u", "n", "d", "(", "d", "o", "o", "r", ")"],
        },
        {
          left: ["sm"],
          right: ["bs"],
        },
        {
          left: ["smg"],
          right: ["sm"],
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
        },
      ],
      [
        {
          left: ["ex"],
          right: ["s", "e", "e", "k", "(", ")"],
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
        },
        {
          left: ["ex"],
          right: ["a", "s", "k", "(", ")"],
        },
      ],
    ],
  };
  return r;
}
