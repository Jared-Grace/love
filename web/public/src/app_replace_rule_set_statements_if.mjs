import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_statements_if_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_if_abbreviations.mjs";
import { app_replace_rule_set_statements_if_rules } from "../../../love/public/src/app_replace_rule_set_statements_if_rules.mjs";
import { js_keyword_if } from "../../../love/public/src/js_keyword_if.mjs";
export function app_replace_rule_set_statements_if() {
  const rules = [];
  app_replace_rule_set_statements_if_rules(rules);
  list_add_multiple(rules, [
    "ex > x < 0",
    "ex > x > 0",
    "ex > x = 1",
    "ex > y === null",
    "ex > positive = true",
    "ex > positive = false",
    "ex > y = 0",
    'ex > log ( " r e s e t " )',
    "ex > y >> max",
  ]);
  let abbreviations = {};
  app_replace_rule_set_statements_if_abbreviations(abbreviations);
  let r = {
    name: "Statements If",
    rules,
    abbreviations,
    goals: [
      {
        start: "is",
        end: js_keyword_if() + " ( y === null ) return ;",
      },
      {
        start: "is",
        end: js_keyword_if() + " ( x < 0 ) { smg }",
      },
      {
        start: js_keyword_if() + " ( x < 0 ) { smg }",
        end: js_keyword_if() + " ( x < 0 ) { x = 1 ; }",
      },
      {
        start: "is",
        end: js_keyword_if() + " ( y > max ) { smg }",
      },
      {
        start: js_keyword_if() + " ( y > max ) { smg }",
        end:
          js_keyword_if() + ' ( y > max ) { y = 0 ; log ( " r e s e t " ) ; }',
      },
      {
        start: "is",
        end: js_keyword_if() + " ( x > 0 ) sm else sm",
      },
      {
        start: js_keyword_if() + " ( x > 0 ) sm else sm",
        end:
          js_keyword_if() +
          " ( x > 0 ) positive = true ; else positive = false ;",
      },
    ],
    why: "The replacement rules describe a grammar for JavaScript-like variable declarations, statements, and if-else control flow, demonstrating how variable statements, expressions, and block/conditional statements are structured and composed in such a language.",
    rules_used: [
      [
        {
          left: ["ex"],
          right: ["y", "===", "null"],
          original: "ex > y === null",
        },
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm"],
          original: "is > if ( ex ) sm",
        },
        {
          left: ["sm"],
          right: ["return", ";"],
          original: "sm > return ;",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["x", "<", "0"],
          original: "ex > x < 0",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm"],
          original: "is > if ( ex ) sm",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["ex"],
          right: ["x", "=", "1"],
          original: "ex > x = 1",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
        {
          left: ["ex"],
          right: ["y", ">", "max"],
          original: "ex > y >> max",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm"],
          original: "is > if ( ex ) sm",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["log", "(", '"', "r", "e", "s", "e", "t", '"', ")"],
          original: 'ex > log ( " r e s e t " )',
        },
        {
          left: ["ex"],
          right: ["y", "=", "0"],
          original: "ex > y = 0",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["x", ">", "0"],
          original: "ex > x > 0",
        },
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm", "else", "sm"],
          original: "is > if ( ex ) sm else sm",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["positive", "=", "false"],
          original: "ex > positive = false",
        },
        {
          left: ["ex"],
          right: ["positive", "=", "true"],
          original: "ex > positive = true",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
      ],
    ],
  };
  return r;
}
