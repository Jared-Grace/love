import { app_replace_rule_set_statements_while_rules } from "./app_replace_rule_set_statements_while_rules.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_replace_rule_set_statements_while() {
  let rules = [];
  app_replace_rule_set_statements_while_rules(rules);
  list_add_multiple(rules, [
    "ex > y > 0",
    "ex > x < 3",
    "ex > x = x + 1",
    "ex > y = y - 1",
    "ex > ! found ( door )",
    "ex > ask ( )",
    "ex > seek ( )",
  ]);
  let left = js_keyword_while();
  let left2 = js_keyword_while();
  let left3 = js_keyword_while();
  let left4 = js_keyword_while();
  let left5 = js_keyword_while();
  let r = {
    name: "Statements While",
    rules,
    goals: [
      {
        start: "ws",
        end: text_combine(left, " ( x < 3 ) x = x + 1 ;"),
      },
      {
        start: "ws",
        end: text_combine(left2, " ( y > 0 ) { y = y - 1 ; }"),
      },
      {
        start: "ws",
        end: text_combine(left3, " ( ! found ( door ) ) { sm sm }"),
      },
      {
        start: text_combine(left4, " ( ! found ( door ) ) { sm sm }"),
        end: text_combine(
          left5,
          " ( ! found ( door ) ) { ask ( ) ; seek ( ) ; }",
        ),
      },
    ],
    why: "The replacement rules define a grammar for parsing JavaScript-like while statements, including variable declarations, assignments, expressions, blocks, and if-else statements, demonstrating how complex control flow and statement grouping are constructed from simpler syntactic elements.",
  };
  return r;
}
