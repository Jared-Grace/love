import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_statements_simple() {
  const rules = [];
  list_add_multiple(rules, [
    "sm > ;",
    "sm > return ;",
    "sm > ex ;",
    "sm > return ex ;",
    "ex > true",
    "ex > u p d a t e ( )",
  ]);
  let abbreviations = {};
  object_merge(abbreviations, {
    sm: ["", "s", "tate", "m", "ent"],
    ex: ["", "l", "ogical ", "o", "perator"],
  });
  let r = {
    name: "Statements Simple",
    abbreviations,
    rules,
    goals: [
      {
        start: "sm",
        end: ";",
      },
      {
        start: "sm",
        end: "return ;",
      },
      {
        start: "sm",
        end: "u p d a t e ( ) ;",
      },
      {
        start: "sm",
        end: "return true ;",
      },
    ],
    why: "These replacement rules define a context-free grammar for a simple programming language's statement and expression syntax, demonstrating how identifiers, literals, expressions, and statements (like return and semicolon-terminated statements) are constructed and combined, including operator precedence and function calls.",
  };
  return r;
}
