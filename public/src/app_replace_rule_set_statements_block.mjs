import { app_replace_rule_set_statements_simple_rules_ex } from "../../../love/public/src/app_replace_rule_set_statements_simple_rules_ex.mjs";
import { app_replace_rule_set_statements_block_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_block_abbreviations.mjs";
import { app_replace_rule_set_statements_block_rules } from "../../../love/public/src/app_replace_rule_set_statements_block_rules.mjs";
export function app_replace_rule_set_statements_block() {
  const rules = [];
  app_replace_rule_set_statements_block_rules(rules);
  app_replace_rule_set_statements_simple_rules_ex(rules);
  let abbreviations = {};
  app_replace_rule_set_statements_block_abbreviations(abbreviations);
  let r = {
    name: "Statements Block",
    rules,
    abbreviations,
    goals: [
      {
        start: "bs",
        end: "{ }",
      },
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
    why: "The rules define a grammar for a block of statements in a programming language, allowing for sequences of statements (including return and expression statements), nested blocks, and specific expressions like 'update()' and 'true', demonstrating how compound and nested statement blocks are structured.",
  };
  return r;
}
