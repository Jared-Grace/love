import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_replace_rule_set_statements_if_abbreviations } from "./app_replace_rule_set_statements_if_abbreviations.mjs";
import { app_replace_rule_set_statements_if_rules } from "./app_replace_rule_set_statements_if_rules.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_replace_rule_set_statements_if() {
  let rules = [];
  app_replace_rule_set_statements_if_rules(rules);
  list_add_multiple(rules, [
    "ex > x < 0",
    "ex > x > 0",
    "ex > x = 1",
    "ex > y === null",
    "ex > positive = true",
    "ex > positive = false",
    "ex > y = 0",
    'ex > log ( "reset" )',
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
        end: text_combine(js_keyword_if(), " ( y === null ) return ;"),
      },
      {
        start: "is",
        end: text_combine(js_keyword_if(), " ( x < 0 ) { smg }"),
      },
      {
        start: text_combine(js_keyword_if(), " ( x < 0 ) { smg }"),
        end: text_combine(js_keyword_if(), " ( x < 0 ) { x = 1 ; }"),
      },
      {
        start: "is",
        end: text_combine(js_keyword_if(), " ( y > max ) { smg }"),
      },
      {
        start: text_combine(js_keyword_if(), " ( y > max ) { smg }"),
        end: text_combine(
          js_keyword_if(),
          ' ( y > max ) { y = 0 ; log ( "reset" ) ; }',
        ),
      },
      {
        start: "is",
        end: text_combine(js_keyword_if(), " ( x > 0 ) sm else sm"),
      },
      {
        start: text_combine(js_keyword_if(), " ( x > 0 ) sm else sm"),
        end: text_combine(
          js_keyword_if(),
          " ( x > 0 ) positive = true ; else positive = false ;",
        ),
      },
    ],
    why: "The replacement rules define a grammar for JavaScript-like variable declarations, expressions, statements, and if/else control flow, demonstrating how these constructs can be recursively composed and expanded to form valid program fragments.",
  };
  return r;
}
