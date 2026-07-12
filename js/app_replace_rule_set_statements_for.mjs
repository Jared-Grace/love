import { app_replace_rule_set_statements_for_rules } from "./app_replace_rule_set_statements_for_rules.mjs";
import { app_replace_rule_set_statements_for_abbreviations } from "./app_replace_rule_set_statements_for_abbreviations.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_replace_rule_set_statements_for() {
  let rules = [];
  app_replace_rule_set_statements_for_rules(rules);
  list_add_multiple(rules, [
    "ex > i = 0",
    "ex > i < 12",
    "ex > i = i + 1",
    "ex > copy [ i ] = list [ i ]",
    "ex > log ( apostle [ i ] )",
    "ex > log ( i )",
    "ex > i < list . length",
  ]);
  let abbreviations = {};
  app_replace_rule_set_statements_for_abbreviations(abbreviations);
  let r = {
    name: "Statements For",
    rules,
    abbreviations,
    goals: [
      {
        start: "fs",
        end: "for ( i = 0 ; i < 12 ; i = i + 1 ) sm",
      },
      {
        start: "for ( i = 0 ; i < 12 ; i = i + 1 ) sm",
        end: "for ( i = 0 ; i < 12 ; i = i + 1 ) log ( apostle [ i ] ) ;",
      },
      {
        start: "fs",
        end: "for ( i = 0 ; i < list . length ; i = i + 1 ) sm",
      },
      {
        start: "for ( i = 0 ; i < list . length ; i = i + 1 ) sm",
        end: "for ( i = 0 ; i < list . length ; i = i + 1 ) { copy [ i ] = list [ i ] ; log ( i ) ; }",
      },
    ],
    why: "The replacement rules define a context-free grammar for JavaScript-like variable declarations, block statements, and control flow constructs (if, while, for), demonstrating how complex statements and loops are built from simpler expressions and statements.",
  };
  return r;
}
