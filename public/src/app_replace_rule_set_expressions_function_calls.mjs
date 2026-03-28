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
        end: "1",
      },
      {
        start: "ce",
        end: "id ( )",
      },
      {
        start: "ce",
        end: "id . id ( )",
      },
      {
        start: "ce",
        end: "id ( ex )",
      },
      {
        start: "id ( ex )",
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
        start: "id ( in , ex )",
        end: "id ( in , in )",
      },
      {
        start: "id ( ex )",
        end: "id ( id . id )",
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
        start: "id ( ex )",
        end: "id ( id ( ) )",
      },
    ],
    why: "The replacement rules define a grammar for parsing function calls and expressions, including literals, identifiers, member access, and argument lists, demonstrating how complex expressions and nested function calls are constructed in a programming language.",
  };
  return r;
}
