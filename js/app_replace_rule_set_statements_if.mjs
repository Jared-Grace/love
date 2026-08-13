import { list_add_multiple } from "./list_add_multiple.mjs";
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
  let left = js_keyword_if();
  let left2 = js_keyword_if();
  let left3 = js_keyword_if();
  let left4 = js_keyword_if();
  let left5 = js_keyword_if();
  let left6 = js_keyword_if();
  let left7 = js_keyword_if();
  let left8 = js_keyword_if();
  let left9 = js_keyword_if();
  let left10 = js_keyword_if();
  let r = {
    name: "Statements If",
    rules,
    goals: [
      {
        start: "is",
        end: text_combine(left, " ( y === null ) return ;"),
      },
      {
        start: "is",
        end: text_combine(left2, " ( x < 0 ) { smg }"),
      },
      {
        start: text_combine(left3, " ( x < 0 ) { smg }"),
        end: text_combine(left4, " ( x < 0 ) { x = 1 ; }"),
      },
      {
        start: "is",
        end: text_combine(left5, " ( y > max ) { smg }"),
      },
      {
        start: text_combine(left6, " ( y > max ) { smg }"),
        end: text_combine(left7, ' ( y > max ) { y = 0 ; log ( "reset" ) ; }'),
      },
      {
        start: "is",
        end: text_combine(left8, " ( x > 0 ) sm else sm"),
      },
      {
        start: text_combine(left9, " ( x > 0 ) sm else sm"),
        end: text_combine(
          left10,
          " ( x > 0 ) positive = true ; else positive = false ;",
        ),
      },
    ],
    why: "The replacement rules define a grammar for JavaScript-like variable declarations, expressions, statements, and if/else control flow, demonstrating how these constructs can be recursively composed and expanded to form valid program fragments.",
  };
  return r;
}
