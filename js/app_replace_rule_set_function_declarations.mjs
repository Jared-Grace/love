import { app_replace_rule_set_identifiers_simple_abbreviation_id } from "./app_replace_rule_set_identifiers_simple_abbreviation_id.mjs";
import { js_keyword_function } from "./js_keyword_function.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_set_statements_for_abbreviations } from "./app_replace_rule_set_statements_for_abbreviations.mjs";
import { app_replace_rule_set_statements_for_rules } from "./app_replace_rule_set_statements_for_rules.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_rule_set_function_declarations() {
  let rules = [];
  app_replace_rule_set_statements_for_rules(rules);
  list_add_multiple(rules, [
    text_combine_multiple(["fd > ", js_keyword_function(), " id ( fdm bs"]),
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
  object_merge_set(abbreviations, {
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
        end: text_combine(js_keyword_function(), " empty ( ) { }"),
      },
      {
        start: "fd",
        end: text_combine(
          js_keyword_function(),
          " tautology ( ) { return true ; }",
        ),
      },
      {
        start: "fd",
        end: text_combine(js_keyword_function(), " id ( id ) bs"),
      },
      {
        start: text_combine(
          js_keyword_function(),
          " id ( id ) { return ex ; }",
        ),
        end: text_combine(
          js_keyword_function(),
          " identity ( i ) { return i ; }",
        ),
      },
      {
        start: text_combine(
          js_keyword_function(),
          " id ( id ) { return ex ; }",
        ),
        end: text_combine(
          js_keyword_function(),
          " invoke ( f ) { return f ( ) ; }",
        ),
      },
      {
        start: "fd",
        end: text_combine(js_keyword_function(), " id ( fpg ) { smg }"),
      },
      {
        start: text_combine(js_keyword_function(), " id ( fpg ) { smg }"),
        end: text_combine(js_keyword_function(), " id ( x , y ) { smg }"),
      },
      {
        start: text_combine(js_keyword_function(), " id ( x , y ) { smg }"),
        end: text_combine(
          js_keyword_function(),
          " add ( x , y ) { return x + y ; }",
        ),
      },
      {
        start: text_combine(js_keyword_function(), " id ( x , y ) { smg }"),
        end: text_combine(
          js_keyword_function(),
          " id ( x , y ) { vs return ex ; }",
        ),
      },
      {
        start: text_combine(
          js_keyword_function(),
          " id ( x , y ) { vs return ex ; }",
        ),
        end: text_combine(
          js_keyword_function(),
          " id ( x , y ) { let id = ex ; return ex ; }",
        ),
      },
      {
        start: text_combine(
          js_keyword_function(),
          " id ( x , y ) { let id = ex ; return ex ; }",
        ),
        end: text_combine(
          js_keyword_function(),
          " average ( x , y ) { let sum = add ( x , y ) ; return sum / 2 ; }",
        ),
      },
    ],
    why: "The replacement rules define a context-free grammar for JavaScript-like function declarations, including variable declarations, statements, blocks, control flow, and expressions, demonstrating how to construct valid function definitions and bodies. This is evident from the presence of rules for 'function', parameter lists, variable declarations (let, const, var), statements (return, if, while, for), and arithmetic expressions, as well as the provided example goals that match typical JavaScript function syntax.",
  };
  return r;
}
