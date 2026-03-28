import { app_replace_rule_set_identifiers_simple_abbreviation_id } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_abbreviation_id.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { js_code_assign } from "../../../love/public/src/js_code_assign.mjs";
import { js_code_let_assign } from "../../../love/public/src/js_code_let_assign.mjs";
import { js_code_semicolon } from "../../../love/public/src/js_code_semicolon.mjs";
import { js_keyword_var } from "../../../love/public/src/js_keyword_var.mjs";
import { js_keyword_const } from "../../../love/public/src/js_keyword_const.mjs";
import { js_keyword_let } from "../../../love/public/src/js_keyword_let.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_primary_abbreviation_ex } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviation_ex.mjs";
export function app_replace_rule_set_statement_variable() {
  const rules = [];
  list_add_multiple(rules, [
    "vs > vk vdg " + js_code_semicolon(),
    "vk > " + js_keyword_let(),
    "vk > " + js_keyword_const(),
    "vk > " + js_keyword_var(),
    "vdg > vd",
    "vdg > vdg , vd",
    "vd > id",
    "vd > id = ex",
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
  let abbreviations = {};
  app_replace_rule_set_expressions_primary_abbreviation_ex(abbreviations);
  app_replace_rule_set_identifiers_simple_abbreviation_id(abbreviations);
  object_merge(abbreviations, {
    vs: ["", "v", "ariable ", "s", "tatement"],
    vk: ["", "v", "ariable ", "k", "eyword"],
    vdg: ["", "v", "ariable ", "d", "eclaration ", "g", "rower"],
    vd: ["", "v", "ariable ", "d", "eclaration"],
  });
  const y_eq_2 = js_code_assign("y", "2");
  let r = {
    name: "Statement Variable",
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
    why: "These replacement rules define a grammar for variable declaration statements in a JavaScript-like language, demonstrating how keywords (let, const, var), identifiers, optional initializations, and comma-separated lists are structured in such statements.",
  };
  return r;
}
