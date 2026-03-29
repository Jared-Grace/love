import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_statements_block_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_block_abbreviations.mjs";
import { app_replace_rule_set_statements_block_rules } from "../../../love/public/src/app_replace_rule_set_statements_block_rules.mjs";
export function app_replace_rule_set_statements_block() {
  const rules = [];
  app_replace_rule_set_statements_block_rules(rules);
  list_add_multiple(rules, ["ex > true", "ex > u p d a t e ( )"]);
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
