import { app_replace_rule_set_identifiers_simple_abbreviation_id } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_abbreviation_id.mjs";
import { js_keyword_function } from "../../../love/public/src/js_keyword_function.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_statements_for_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_for_abbreviations.mjs";
import { app_replace_rule_set_statements_for_rules } from "../../../love/public/src/app_replace_rule_set_statements_for_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_function_declarations() {
  const rules = [];
  app_replace_rule_set_statements_for_rules(rules);
  list_add_multiple(rules, [
    "fd > " + js_keyword_function() + " id ( fdm bs",
    "fdm > )",
    "fdm > fpg )",
    "fpg > fpg , id",
    "fpg > id",
    "id > empty",
    "id > tautology",
    "id > identity",
    "id > invoke",
    "id > average",
    "id > sum",
    "id > add",
    "id > i",
    "id > f",
    "id > x",
    "id > y",
    "ex > true",
    "ex > i",
    "ex > x + y",
    "ex > x",
    "ex > y",
    "ex > f ( )",
    "ex > sum / 2",
    "ex > add ( x , y )",
  ]);
  let abbreviations = {};
  app_replace_rule_set_statements_for_abbreviations(abbreviations);
  app_replace_rule_set_identifiers_simple_abbreviation_id(abbreviations);
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
        end: js_keyword_function() + " empty ( ) { }",
      },
      {
        start: "fd",
        end: js_keyword_function() + " tautology ( ) { return true ; }",
      },
      {
        start: "fd",
        end: js_keyword_function() + " id ( id ) bs",
      },
      {
        start: js_keyword_function() + " id ( id ) { return ex ; }",
        end: js_keyword_function() + " identity ( i ) { return i ; }",
      },
      {
        start: js_keyword_function() + " id ( id ) { return ex ; }",
        end: js_keyword_function() + " invoke ( f ) { return f ( ) ; }",
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
        end: js_keyword_function() + " add ( x , y ) { return x + y ; }",
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
          " average ( x , y ) { let sum = add ( x , y ) ; return sum / 2 ; }",
      },
    ],
    why: "The replacement rules define a context-free grammar for JavaScript-like function declarations, including variable declarations, statements, blocks, control flow, and expressions, demonstrating how to construct valid function definitions and bodies from basic language constructs.",
  };
  return r;
}
