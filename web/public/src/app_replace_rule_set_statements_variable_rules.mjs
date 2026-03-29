import { js_keyword_var } from "../../../love/public/src/js_keyword_var.mjs";
import { js_keyword_const } from "../../../love/public/src/js_keyword_const.mjs";
import { js_keyword_let } from "../../../love/public/src/js_keyword_let.mjs";
import { js_code_semicolon } from "../../../love/public/src/js_code_semicolon.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_statements_variable_rules(rules) {
  list_add_multiple(rules, [
    "vs > vk vdg " + js_code_semicolon(),
    "vk > " + js_keyword_let(),
    "vk > " + js_keyword_const(),
    "vk > " + js_keyword_var(),
    "vdg > vd",
    "vdg > vdg , vd",
    "vd > id",
    "vd > id = ex",
  ]);
}
