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
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["bs"],
          right: ["{", "}"],
          original: "bs > { }",
        },
      ],
      [
        {
          left: ["sm"],
          right: [";"],
          original: "sm > ;",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["u", "p", "d", "a", "t", "e", "(", ")"],
          original: "ex > u p d a t e ( )",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
      ],
      [
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["ex"],
          right: ["u", "p", "d", "a", "t", "e", "(", ")"],
          original: "ex > u p d a t e ( )",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["true"],
          original: "ex > true",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
      ],
    ],
  };
  return r;
}
