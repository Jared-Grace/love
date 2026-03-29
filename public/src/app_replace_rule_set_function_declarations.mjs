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
    ],
    why: "The replacement rules define a context-free grammar for JavaScript-like function declarations, including variable declarations, statements, expressions, and function parameters, demonstrating how to construct valid function definitions and bodies using these syntactic elements.",
    rules_used: [
      [
        {
          left: ["id"],
          right: ["e", "m", "p", "t", "y"],
          original: "id > e m p t y",
        },
        {
          left: ["fd"],
          right: ["function", "id", "(", "fdm", "bs"],
          original: "fd > function id ( fdm bs",
        },
        {
          left: ["fdm"],
          right: [")"],
          original: "fdm > )",
        },
        {
          left: ["bs"],
          right: ["{", "}"],
          original: "bs > { }",
        },
      ],
      [
        {
          left: ["fdm"],
          right: [")"],
          original: "fdm > )",
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["fd"],
          right: ["function", "id", "(", "fdm", "bs"],
          original: "fd > function id ( fdm bs",
        },
        {
          left: ["ex"],
          right: ["true"],
          original: "ex > true",
        },
        {
          left: ["id"],
          right: ["t", "a", "u", "t", "o", "l", "o", "g", "y"],
          original: "id > t a u t o l o g y",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
      ],
      [
        {
          left: ["fpg"],
          right: ["id"],
          original: "fpg > id",
        },
        {
          left: ["fd"],
          right: ["function", "id", "(", "fdm", "bs"],
          original: "fd > function id ( fdm bs",
        },
        {
          left: ["fdm"],
          right: ["fpg", ")"],
          original: "fdm > fpg )",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["i"],
          original: "ex > i",
        },
        {
          left: ["id"],
          right: ["i"],
          original: "id > i",
        },
        {
          left: ["id"],
          right: ["i", "d", "e", "n", "t", "i", "t", "y"],
          original: "id > i d e n t i t y",
        },
      ],
      [
        {
          left: ["id"],
          right: ["i", "n", "v", "o", "k", "e"],
          original: "id > i n v o k e",
        },
        {
          left: ["id"],
          right: ["f"],
          original: "id > f",
        },
        {
          left: ["ex"],
          right: ["f", "(", ")"],
          original: "ex > f ( )",
        },
      ],
      [
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["fd"],
          right: ["function", "id", "(", "fdm", "bs"],
          original: "fd > function id ( fdm bs",
        },
        {
          left: ["fdm"],
          right: ["fpg", ")"],
          original: "fdm > fpg )",
        },
      ],
      [
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["fpg"],
          right: ["fpg", ",", "id"],
          original: "fpg > fpg , id",
        },
        {
          left: ["fpg"],
          right: ["id"],
          original: "fpg > id",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
      ],
      [
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["ex"],
          right: ["x", "+", "y"],
          original: "ex > x + y",
        },
        {
          left: ["id"],
          right: ["a", "d", "d"],
          original: "id > a d d",
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
      ],
      [
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["sm"],
          right: ["vs"],
          original: "sm > vs",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
      ],
      [
        {
          left: ["vd"],
          right: ["id", "=", "ex"],
          original: "vd > id = ex",
        },
        {
          left: ["vk"],
          right: ["let"],
          original: "vk > let",
        },
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["a", "d", "d", "(", "x", ",", "y", ")"],
          original: "ex > a d d ( x , y )",
        },
        {
          left: ["id"],
          right: ["a", "v", "e", "r", "a", "g", "e"],
          original: "id > a v e r a g e",
        },
        {
          left: ["ex"],
          right: ["s", "u", "m", "/", "2"],
          original: "ex > s u m / 2",
        },
        {
          left: ["id"],
          right: ["s", "u", "m"],
          original: "id > s u m",
        },
      ],
    ],
  };
  return r;
}
