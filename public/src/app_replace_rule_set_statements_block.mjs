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
    why: "The replacement rules define a grammar for a block of statements in a programming language, supporting empty blocks, sequences of statements, return statements, and simple expressions like 'true' and 'update()', demonstrating how statements and blocks can be recursively composed.",
    rules_used: [
      [
        {
          left: ["bs"],
          right: ["{", "}"],
        },
        {
          left: ["smg"],
          right: ["sm"],
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
        },
      ],
      [
        {
          left: ["sm"],
          right: [";"],
        },
        {
          left: ["smg"],
          right: ["sm"],
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
        },
      ],
      [
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
        },
        {
          left: ["smg"],
          right: ["sm"],
        },
        {
          left: ["ex"],
          right: ["u", "p", "d", "a", "t", "e", "(", ")"],
        },
      ],
      [
        {
          left: ["ex"],
          right: ["u", "p", "d", "a", "t", "e", "(", ")"],
        },
        {
          left: ["ex"],
          right: ["true"],
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
        },
        {
          left: ["smg"],
          right: ["sm"],
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
        },
      ],
    ],
  };
  return r;
}
