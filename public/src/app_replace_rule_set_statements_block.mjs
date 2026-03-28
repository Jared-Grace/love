import { app_replace_rule_set_statements_block_rules } from "../../../love/public/src/app_replace_rule_set_statements_block_rules.mjs";
import { app_replace_rule_set_statements_simple_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_simple_abbreviations.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_replace_rule_set_statements_block() {
  const rules = [];
  app_replace_rule_set_statements_block_rules(rules);
  let abbreviations = {};
  app_replace_rule_set_statements_simple_abbreviations(abbreviations);
  object_merge(abbreviations, {
    smg: ["", "s", "tate", "m", "ent ", "g", "rower"],
  });
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
    why: "The replacement rules define a simple block-based statement grammar that allows sequences of statements (including 'return' and expression statements like 'update()') inside curly braces, demonstrating how statements and expressions can be composed and nested in a block structure.",
  };
  return r;
}
