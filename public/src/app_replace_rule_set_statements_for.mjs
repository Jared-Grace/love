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
    "ex > c o p y [ i ] = l i s t [ i ]",
    "ex > l o g ( a p o s t l e [ i ] )",
    "ex > l o g ( i )",
    "ex > i < l i s t . l e n g t h",
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
        end: "for ( i = 0 ; i < 12 ; i = i + 1 ) l o g ( a p o s t l e [ i ] ) ;",
      },
      {
        start: "fs",
        end: "for ( i = 0 ; i < l i s t . l e n g t h ; i = i + 1 ) sm",
      },
      {
        start: "for ( i = 0 ; i < l i s t . l e n g t h ; i = i + 1 ) sm",
        end: "for ( i = 0 ; i < l i s t . l e n g t h ; i = i + 1 ) { c o p y [ i ] = l i s t [ i ] ; l o g ( i ) ; }",
      },
    ],
    why: "The replacement rules describe the grammar for JavaScript-like for-loops and related statements, demonstrating how variable declarations, expressions, and block statements are structured within for-loops and other control flow constructs, as shown by the rules for variable declarations, expressions, and the composition of statements inside blocks.",
    rules_used: [
      [
        {
          left: ["fs"],
          right: ["for", "(", "ex", ";", "ex", ";", "ex", ")", "sm"],
          original: "fs > for ( ex ; ex ; ex ) sm",
        },
        {
          left: ["ex"],
          right: ["i", "<", "12"],
          original: "ex > i < 12",
        },
        {
          left: ["ex"],
          right: ["i", "=", "i", "+", "1"],
          original: "ex > i = i + 1",
        },
        {
          left: ["ex"],
          right: ["i", "=", "0"],
          original: "ex > i = 0",
        },
      ],
      [
        {
          left: ["fs"],
          right: ["for", "(", "ex", ";", "ex", ";", "ex", ")", "sm"],
          original: "fs > for ( ex ; ex ; ex ) sm",
        },
        {
          left: ["ex"],
          right: [
            "l",
            "o",
            "g",
            "(",
            "a",
            "p",
            "o",
            "s",
            "t",
            "l",
            "e",
            "[",
            "i",
            "]",
            ")",
          ],
          original: "ex > l o g ( a p o s t l e [ i ] )",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["i", "=", "i", "+", "1"],
          original: "ex > i = i + 1",
        },
        {
          left: ["fs"],
          right: ["for", "(", "ex", ";", "ex", ";", "ex", ")", "sm"],
          original: "fs > for ( ex ; ex ; ex ) sm",
        },
        {
          left: ["ex"],
          right: ["i", "=", "0"],
          original: "ex > i = 0",
        },
        {
          left: ["ex"],
          right: [
            "i",
            "<",
            "l",
            "i",
            "s",
            "t",
            ".",
            "l",
            "e",
            "n",
            "g",
            "t",
            "h",
          ],
          original: "ex > i < l i s t . l e n g t h",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
        {
          left: ["ex"],
          right: ["l", "o", "g", "(", "i", ")"],
          original: "ex > l o g ( i )",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
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
          left: ["ex"],
          right: [
            "c",
            "o",
            "p",
            "y",
            "[",
            "i",
            "]",
            "=",
            "l",
            "i",
            "s",
            "t",
            "[",
            "i",
            "]",
          ],
          original: "ex > c o p y [ i ] = l i s t [ i ]",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
      ],
    ],
  };
  return r;
}
