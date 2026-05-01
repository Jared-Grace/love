import { app_replace_rule_set_expressions_function_calls_rules } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_rules.mjs";
import { app_replace_rule_set_expressions_function_calls_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_function_calls() {
  const rules = [];
  app_replace_rule_set_expressions_function_calls_rules(rules);
  list_add(rules, "ex > ce");
  let abbreviations = {};
  app_replace_rule_set_expressions_function_calls_abbreviations(abbreviations);
  let r = {
    name: "Expressions Function Calls",
    abbreviations,
    rules,
    goals: [
      {
        start: "ce",
        end: "id",
      },
      {
        start: "ce",
        end: "fn ( )",
      },
      {
        start: "ce",
        end: "id . id ( )",
      },
      {
        start: "id . id ( )",
        end: "page . refresh ( )",
      },
      {
        start: "ce",
        end: "id ( ex )",
      },
      {
        start: "id ( ex )",
        end: "id ( li )",
      },
      {
        start: "id ( li )",
        end: "id ( de )",
      },
      {
        start: "id ( ag )",
        end: "id ( ex , ex )",
      },
      {
        start: "id ( ex , ex )",
        end: "id ( nu , ex )",
      },
      {
        start: "id ( nu , ex )",
        end: "id ( nu , nu )",
      },
      {
        start: "id ( nu , nu )",
        end: "add ( 1 , 2 )",
      },
      {
        start: "id ( ex )",
        end: "id ( id . id )",
      },
      {
        start: "id ( id . id )",
        end: "knock ( building . door )",
      },
      {
        start: "id ( ex )",
        end: "id ( id [ ex ] )",
      },
      {
        start: "id ( id [ ex ] )",
        end: "id ( id [ nu ] )",
      },
      {
        start: "id ( id [ nu ] )",
        end: "double ( list [ 0 ] )",
      },
      {
        start: "id ( ex )",
        end: "id ( id ( ) )",
      },
      {
        start: "id ( id ( ) )",
        end: "love ( all ( ) )",
      },
    ],
    why: "The replacement rules define a grammar for parsing function call expressions, member access, and literals (numbers, strings, booleans, null) in a programming language, demonstrating how identifiers, literals, and expressions can be composed into nested function calls and property accesses.",
  };
  return r;
}
