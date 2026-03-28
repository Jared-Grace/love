import { js_code_let_assign } from "../../../love/public/src/js_code_let_assign.mjs";
import { js_code_semicolon } from "../../../love/public/src/js_code_semicolon.mjs";
import { js_keyword_var } from "../../../love/public/src/js_keyword_var.mjs";
import { js_keyword_const } from "../../../love/public/src/js_keyword_const.mjs";
import { js_keyword_let } from "../../../love/public/src/js_keyword_let.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_primary_abbreviation_ex } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviation_ex.mjs";
export function app_new_rule_set_new_2() {
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
    "id > i",
    "id > j",
    "id > x",
    "id > y",
    "ex > 0",
    "ex > 1",
    "ex > 2",
  ]);
  let abbreviations = {};
  app_replace_rule_set_expressions_primary_abbreviation_ex(abbreviations);
  let r = {
    name: "Statement variable",
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
        end: "const vdg , y = 2 ;",
      },
      {
        start: "const vdg , y = 2 ;",
        end: "const x = 1 , y = 2 ;",
      },
    ],
  };
  return r;
}
