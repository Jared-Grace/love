import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_statements_while_rules } from "../../../love/public/src/app_replace_rule_set_statements_while_rules.mjs";
import { app_replace_rule_set_statements_block_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_block_abbreviations.mjs";
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
  app_replace_rule_set_statements_block_abbreviations(abbreviations);
  object_merge(abbreviations, {
    smg: ["", "w", "hile", "s", "tatement"],
  });
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
    why: "The replacement rules describe a grammar for JavaScript-like while loops, including variable declarations, expressions, statements, blocks, and control flow, demonstrating how to construct valid while statements and their bodies using basic programming constructs.",
  };
  return r;
}
