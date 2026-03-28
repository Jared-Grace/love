import { app_replace_rule_set_statements_block_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_block_abbreviations.mjs";
import { app_replace_rule_set_statements_block_rules } from "../../../love/public/src/app_replace_rule_set_statements_block_rules.mjs";
export function app_replace_rule_set_statements_block() {
  const rules = [];
  app_replace_rule_set_statements_block_rules(rules);
  let abbreviations = {};
  app_replace_rule_set_statements_block_abbreviations(abbreviations);
  let r = {
    name: "Statements Block",
    rules,
    abbreviations,
    goals: [
      {
        start: "bs",
        end: "{ ; }",
      },
      {
        start: "bs",
        end: "{ u p d a t e ( ) ; }",
      },
      {
        start: "bs",
        end: "{ u p d a t e ( ) ; return true ; }",
      },
    ],
    why: "The replacement rules define a grammar for a block of statements in a programming language, allowing sequences of statements (including 'return' and 'update()' expressions) within curly braces, demonstrating how simple statement blocks are structured and parsed.",
  };
  return r;
}
