import { app_replace_rule_set_expressions_function_calls_rules } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_rules.mjs";
import { app_replace_rule_set_expressions_function_calls_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_function_calls() {
  const rules = [];
  app_replace_rule_set_expressions_function_calls_rules(rules);
  list_add(rules, "ex > cae");
  let abbreviations = {};
  app_replace_rule_set_expressions_function_calls_abbreviations(abbreviations);
  let r = {
    name: "Expressions Function Calls",
    abbreviations,
    rules,
    goals: [
      {
        start: "cae",
        end: "id",
      },
      {
        start: "cae",
        end: "id ( )",
      },
      {
        start: "cae",
        end: "id . id ( )",
      },
      {
        start: "cae",
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
        end: "id ( in , ex )",
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
        end: "id ( id [ in ] )",
      },
      {
        start: "id ( ex )",
        end: "id ( id ( ) )",
      },
    ],
    why: "The replacement rules define a grammar for parsing function call expressions, including nested calls, member access, literals, and argument lists, demonstrating how complex expressions like function calls with various argument types and member accesses are constructed from simpler components.",
  };
  return r;
}
