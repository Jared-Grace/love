import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_statements_variable_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_variable_abbreviations.mjs";
import { app_replace_rule_set_statements_variable_rules } from "../../../love/public/src/app_replace_rule_set_statements_variable_rules.mjs";
import { js_code_assign } from "../../../love/public/src/js_code_assign.mjs";
import { js_code_let_assign } from "../../../love/public/src/js_code_let_assign.mjs";
import { app_replace_rule_set_expressions_primary_abbreviation_ex } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviation_ex.mjs";
export function app_replace_rule_set_statements_variable() {
  const rules = [];
  app_replace_rule_set_statements_variable_rules(rules);
  let abbreviations = {};
  app_replace_rule_set_expressions_primary_abbreviation_ex(abbreviations);
  app_replace_rule_set_statements_variable_abbreviations(abbreviations);
  list_add_multiple(rules, [
    "id > a",
    "id > b",
    "id > c",
    "id > i",
    "id > j",
    "id > x",
    "id > y",
    "id > z",
    "ex > 0",
    "ex > 1",
    "ex > 2",
  ]);
  const y_eq_2 = js_code_assign("y", "2");
  let r = {
    name: "Statements Variable",
    abbreviations,
    rules,
    goals: [
      {
        start: "vs",
        end: "let i ;",
      },
      {
        start: "vs",
        end: js_code_let_assign("j", "0"),
      },
      {
        start: "vs",
        end: "var x , y ;",
      },
      {
        start: "vs",
        end: "var a , vd , vd ;",
      },
      {
        start: "var a , vd , vd ;",
        end: "var a , b , c ;",
      },
      {
        start: "vs",
        end: "const vdg , " + y_eq_2 + " ;",
      },
      {
        start: "const vdg , " + y_eq_2 + " ;",
        end: "const x = 1 , " + y_eq_2 + " ;",
      },
    ],
    why: "The replacement rules define a context-free grammar for variable declaration statements in a JavaScript-like language, demonstrating how variable keywords, identifiers, and optional initializations can be combined and separated by commas to form valid statements.",
    rules_used: [
      [
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
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
          left: ["id"],
          right: ["i"],
          original: "id > i",
        },
        {
          left: ["vd"],
          right: ["id"],
          original: "vd > id",
        },
      ],
      [
        {
          left: ["id"],
          right: ["j"],
          original: "id > j",
        },
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["vd"],
          right: ["id", "=", "ex"],
          original: "vd > id = ex",
        },
        {
          left: ["ex"],
          right: ["0"],
          original: "ex > 0",
        },
        {
          left: ["vk"],
          right: ["let"],
          original: "vk > let",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
      ],
      [
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["vk"],
          right: ["var"],
          original: "vk > var",
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
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["vd"],
          right: ["id"],
          original: "vd > id",
        },
        {
          left: ["vdg"],
          right: ["vdg", ",", "vd"],
          original: "vdg > vdg , vd",
        },
      ],
      [
        {
          left: ["id"],
          right: ["a"],
          original: "id > a",
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
        {
          left: ["vk"],
          right: ["var"],
          original: "vk > var",
        },
        {
          left: ["vdg"],
          right: ["vdg", ",", "vd"],
          original: "vdg > vdg , vd",
        },
        {
          left: ["vd"],
          right: ["id"],
          original: "vd > id",
        },
      ],
      [
        {
          left: ["id"],
          right: ["c"],
          original: "id > c",
        },
        {
          left: ["vd"],
          right: ["id"],
          original: "vd > id",
        },
        {
          left: ["id"],
          right: ["b"],
          original: "id > b",
        },
      ],
      [
        {
          left: ["vdg"],
          right: ["vdg", ",", "vd"],
          original: "vdg > vdg , vd",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["vk"],
          right: ["const"],
          original: "vk > const",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
        {
          left: ["vd"],
          right: ["id", "=", "ex"],
          original: "vd > id = ex",
        },
        {
          left: ["ex"],
          right: ["2"],
          original: "ex > 2",
        },
      ],
      [
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["vd"],
          right: ["id", "=", "ex"],
          original: "vd > id = ex",
        },
        {
          left: ["ex"],
          right: ["1"],
          original: "ex > 1",
        },
      ],
    ],
  };
  return r;
}
