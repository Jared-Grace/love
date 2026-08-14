import { app_replace_rule_set_statements_simple_rules_ex } from "./app_replace_rule_set_statements_simple_rules_ex.mjs";
import { app_replace_rule_set_statements_block_rules } from "./app_replace_rule_set_statements_block_rules.mjs";
export function app_replace_rule_set_statements_block() {
  let rules = [];
  app_replace_rule_set_statements_block_rules(rules);
  app_replace_rule_set_statements_simple_rules_ex(rules);
  let r = {
    name: "Statements Block",
    rules,
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
    why: "Curly brackets gather several instructions into one. A block can hold none, one, or many - and because a block is itself an instruction, a block can sit inside another block.",
  };
  return r;
}
