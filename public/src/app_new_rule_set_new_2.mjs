import { js_keyword_function } from "../../../love/public/src/js_keyword_function.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_statements_for_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_for_abbreviations.mjs";
import { app_replace_rule_set_statements_for_rules } from "../../../love/public/src/app_replace_rule_set_statements_for_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_statements_for_rules(rules);
  list_add_multiple(rules, [
    "fd > " + js_keyword_function() + " id ( fdm bs",
    "fdm > )",
    "fdm > fpg )",
    "fpg > fpg , id",
    "fpg > id",
    "id > e m p t y",
    "id > t a u t o l o g y",
    "id > i d e n t i t y",
    "id > i n v o k e",
    "ex > true",
    "ex > i",
    "ex > x + y",
    "ex > x",
    "ex > y",
    "ex > f ( )",
  ]);
  let abbreviations = {};
  app_replace_rule_set_statements_for_abbreviations(abbreviations);
  object_merge(abbreviations, {
    fd: ["", "f", "unction ", "d", "eclaration"],
    fdm: ["", "f", "unction ", "d", "eclaration ", "m", "iddle"],
    fpg: ["", "f", "unction ", "p", "arameter ", "g", "rower"],
  });
  let r = {
    name: "Function Declarations",
    rules,
    abbreviations,
    goals: [
      {
        start: "fd",
        end: js_keyword_function() + " e m p t y ( ) { }",
      },
      {
        start: "fd",
        end: js_keyword_function() + " t a u t o l o g y ( ) { return true ; }",
      },
      {
        start: "fd",
        end: js_keyword_function() + " i d e n t i t y ( i ) { return i ; }",
      },
      {
        start: "fd",
        end: js_keyword_function() + " i n v o k e ( f ) { return f ( ) ; }",
      },
      {
        start: "fd",
        end: js_keyword_function() + " a d d ( x , y ) { return x + y ; }",
      },
    ],
  };
  return r;
}
