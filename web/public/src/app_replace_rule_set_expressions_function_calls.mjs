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
        end: "f n ( )",
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
        end: "d o u b l e ( l i s t [ 0 ] )",
      },
      {
        start: "id ( ex )",
        end: "id ( id ( ) )",
      },
      {
        start: "id ( id ( ) )",
        end: "l o v e ( a l l ( ) )",
      },
    ],
    why: "These replacement rules define a grammar for parsing function calls and member access expressions, including identifiers, literals, numbers, strings, booleans, and nested function calls, demonstrating how complex expressions and function invocations are constructed from simpler components.",
  };
  return r;
}
