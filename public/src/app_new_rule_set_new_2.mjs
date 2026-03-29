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
    "sm > fs",
    "id > e m p t y",
    "id > t a u t o l o g y",
    "id > i d e n t i t y",
    "id > i n v o k e",
    "id > a d d",
    "id > a v e r a g e",
    "id > i",
    "id > f",
    "id > x",
    "id > y",
    "id > s u m",
    "id > l i s t",
    "ex > true",
    "ex > i",
    "ex > x + y",
    "ex > x",
    "ex > y",
    "ex > f ( )",
    "ex > s u m / 2",
    "ex > a d d ( x , y )",
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
        end: js_keyword_function() + " id ( id ) bs",
      },
      {
        start: js_keyword_function() + " id ( id ) { return ex ; }",
        end: js_keyword_function() + " i d e n t i t y ( i ) { return i ; }",
      },
      {
        start: js_keyword_function() + " id ( id ) { return ex ; }",
        end: js_keyword_function() + " i n v o k e ( f ) { return f ( ) ; }",
      },
      {
        start: "fd",
        end: js_keyword_function() + " id ( fpg ) { smg }",
      },
      {
        start: js_keyword_function() + " id ( fpg ) { smg }",
        end: js_keyword_function() + " id ( x , y ) { smg }",
      },
      {
        start: js_keyword_function() + " id ( x , y ) { smg }",
        end: js_keyword_function() + " a d d ( x , y ) { return x + y ; }",
      },
      {
        start: js_keyword_function() + " id ( x , y ) { smg }",
        end: js_keyword_function() + " id ( x , y ) { vs return ex ; }",
      },
      {
        start: js_keyword_function() + " id ( x , y ) { vs return ex ; }",
        end:
          js_keyword_function() + " id ( x , y ) { let id = ex ; return ex ; }",
      },
      {
        start:
          js_keyword_function() + " id ( x , y ) { let id = ex ; return ex ; }",
        end:
          js_keyword_function() +
          " a v e r a g e ( x , y ) { let s u m = a d d ( x , y ) ; return s u m / 2 ; }",
      },
      {
        start: js_keyword_function() + " id ( fpg ) { smg }",
        end: js_keyword_function() + " id ( id ) { sm sm sm }",
      },
      {
        start: js_keyword_function() + " id ( id ) { sm sm sm }",
        end: js_keyword_function() + " id ( id ) { vs sm return ex ; }",
      },
      {
        start: js_keyword_function() + " id ( id ) { vs sm return ex ; }",
        end:
          js_keyword_function() +
          " id ( id ) { let id = ex , id ; sm return ex ; }",
      },
      {
        start:
          js_keyword_function() + " id ( id ) { let id = ex ; sm return ex ; }",
        end:
          js_keyword_function() +
          " id ( id ) { let id = ex ; for ( ex ; ex ; ex ) sm return ex ; }",
      },
      {
        start:
          js_keyword_function() +
          " id ( id ) { let id = ex ; for ( ex ; ex ; ex ) sm return ex ; }",
        end:
          js_keyword_function() +
          " id ( id ) { let id = ex ; for ( ex ; ex ; ex ) sm return ex ; }",
      },
      {
        start:
          js_keyword_function() + " id ( id ) { let id = ex ; sm return ex ; }",
        end:
          js_keyword_function() +
          " s u m ( l i s t ) { let id = ex ; fs return ex ; }",
      },
    ],
  };
  return r;
}
