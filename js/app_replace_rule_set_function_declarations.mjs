import { js_keyword_function } from "./js_keyword_function.mjs";
import { app_replace_rule_set_statements_for_rules } from "./app_replace_rule_set_statements_for_rules.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_rule_set_function_declarations() {
  let rules = [];
  app_replace_rule_set_statements_for_rules(rules);
  let v = js_keyword_function();
  let combined = text_combine_multiple(["fd > ", v, " id ( fdm bs"]);
  list_add_multiple(rules, [
    combined,
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
  let left = js_keyword_function();
  let left2 = js_keyword_function();
  let left3 = js_keyword_function();
  let left4 = js_keyword_function();
  let left5 = js_keyword_function();
  let left6 = js_keyword_function();
  let left7 = js_keyword_function();
  let left8 = js_keyword_function();
  let left9 = js_keyword_function();
  let left10 = js_keyword_function();
  let left11 = js_keyword_function();
  let left12 = js_keyword_function();
  let left13 = js_keyword_function();
  let left14 = js_keyword_function();
  let left15 = js_keyword_function();
  let left16 = js_keyword_function();
  let left17 = js_keyword_function();
  let left18 = js_keyword_function();
  let r = {
    name: "Function Declarations",
    rules,
    goals: [
      {
        start: "fd",
        end: text_combine(left, " empty ( ) { }"),
      },
      {
        start: "fd",
        end: text_combine(left2, " tautology ( ) { return true ; }"),
      },
      {
        start: "fd",
        end: text_combine(left3, " id ( id ) bs"),
      },
      {
        start: text_combine(left4, " id ( id ) { return ex ; }"),
        end: text_combine(left5, " identity ( i ) { return i ; }"),
      },
      {
        start: text_combine(left6, " id ( id ) { return ex ; }"),
        end: text_combine(left7, " invoke ( f ) { return f ( ) ; }"),
      },
      {
        start: "fd",
        end: text_combine(left8, " id ( fpg ) { smg }"),
      },
      {
        start: text_combine(left9, " id ( fpg ) { smg }"),
        end: text_combine(left10, " id ( x , y ) { smg }"),
      },
      {
        start: text_combine(left11, " id ( x , y ) { smg }"),
        end: text_combine(left12, " add ( x , y ) { return x + y ; }"),
      },
      {
        start: text_combine(left13, " id ( x , y ) { smg }"),
        end: text_combine(left14, " id ( x , y ) { vs return ex ; }"),
      },
      {
        start: text_combine(left15, " id ( x , y ) { vs return ex ; }"),
        end: text_combine(
          left16,
          " id ( x , y ) { let id = ex ; return ex ; }",
        ),
      },
      {
        start: text_combine(
          left17,
          " id ( x , y ) { let id = ex ; return ex ; }",
        ),
        end: text_combine(
          left18,
          " average ( x , y ) { let sum = add ( x , y ) ; return sum / 2 ; }",
        ),
      },
    ],
    why: "The replacement rules define a context-free grammar for JavaScript-like function declarations, including variable declarations, statements, blocks, control flow, and expressions, demonstrating how to construct valid function definitions and bodies. This is evident from the presence of rules for 'function', parameter lists, variable declarations (let, const, var), statements (return, if, while, for), and arithmetic expressions, as well as the provided example goals that match typical JavaScript function syntax.",
  };
  return r;
}
