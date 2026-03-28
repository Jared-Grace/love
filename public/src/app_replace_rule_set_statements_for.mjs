import { app_replace_rule_set_statements_while_rules } from "../../../love/public/src/app_replace_rule_set_statements_while_rules.mjs";
import { app_replace_rule_set_statements_if_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_if_abbreviations.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_statements_for() {
  const rules = [];
  app_replace_rule_set_statements_while_rules(rules);
  list_add_multiple(rules, [
    "fs > for ( ex ; ex ; ex ) sm",
    "ex > let i = 0",
    "ex > i < 12",
    "ex > i = i + 1",
    "ex > c o p y [ i ] = l i s t [ i ]",
    "ex > l o g ( a p o s t l e [ i ] )",
    "ex > l o g ( i )",
    "ex > i < l i s t . l e n g t h",
  ]);
  let abbreviations = {};
  app_replace_rule_set_statements_if_abbreviations(abbreviations);
  let r = {
    name: "Statements For",
    rules,
    abbreviations,
    goals: [
      {
        start: "fs",
        end: "for ( let i = 0 ; i < 12 ; i = i + 1 ) sm",
      },
      {
        start: "for ( let i = 0 ; i < 12 ; i = i + 1 ) sm",
        end: "for ( let i = 0 ; i < 12 ; i = i + 1 ) l o g ( a p o s t l e [ i ] ) ;",
      },
      {
        start: "fs",
        end: "for ( let i = 0 ; i < l i s t . l e n g t h ; i = i + 1 ) sm",
      },
      {
        start: "for ( let i = 0 ; i < l i s t . l e n g t h ; i = i + 1 ) sm",
        end: "for ( let i = 0 ; i < l i s t . l e n g t h ; i = i + 1 ) { c o p y [ i ] = l i s t [ i ] ; l o g ( i ) ; }",
      },
    ],
    why: "The replacement rules describe the grammar for JavaScript-like variable declarations, statements, and especially for-loops, demonstrating how for-loops are constructed with initialization, condition, increment, and a statement or block as the body.",
  };
  return r;
}
