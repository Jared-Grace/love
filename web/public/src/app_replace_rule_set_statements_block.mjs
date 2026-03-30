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
        end: "{ update ( ) ; }",
      },
      {
        start: "bs",
        end: "{ update ( ) ; return true ; }",
      },
    ],
    why: "The replacement rules define a grammar for a block of statements in a programming language, supporting empty blocks, sequences of statements, return statements, and simple expressions like 'true' and 'update()', demonstrating how statements and blocks can be recursively composed.",
  };
  return r;
}
