import { app_replace_rule_set_statements_for_rules } from "../../../love/public/src/app_replace_rule_set_statements_for_rules.mjs";
import { app_replace_rule_set_statements_for_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_for_abbreviations.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_statements_for() {
  const rules = [];
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
    why: "The replacement rules describe the grammar for JavaScript-like for-loops and related statements, demonstrating how variable declarations, expressions, and block statements are structured within for-loops and other control flow constructs, as shown by the rules for variable declarations, expressions, and the composition of statements inside blocks.",
  };
  return r;
}
