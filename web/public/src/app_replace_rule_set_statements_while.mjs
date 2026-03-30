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
    "ex > ! found ( door )",
    "ex > ask ( )",
    "ex > seek ( )",
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
        end: js_keyword_while() + " ( ! found ( door ) ) { sm sm }",
      },
      {
        start: js_keyword_while() + " ( ! found ( door ) ) { sm sm }",
        end:
          js_keyword_while() + " ( ! found ( door ) ) { ask ( ) ; seek ( ) ; }",
      },
    ],
    why: "The replacement rules define a grammar for JavaScript-like while statements, including variable declarations, expressions, blocks, and if-else statements, demonstrating how complex control flow and statement grouping are constructed from simpler syntactic elements.",
  };
  return r;
}
