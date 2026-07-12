import { js_keyword_var } from "./js_keyword_var.mjs";
import { js_keyword_const } from "./js_keyword_const.mjs";
import { js_keyword_let } from "./js_keyword_let.mjs";
import { js_code_semicolon } from "./js_code_semicolon.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_replace_rule_set_statements_variable_rules(rules) {
  list_add_multiple(rules, [
    text_combine("vs > vk vdg ", js_code_semicolon()),
    text_combine("vk > ", js_keyword_let()),
    text_combine("vk > ", js_keyword_const()),
    text_combine("vk > ", js_keyword_var()),
    "vdg > vd",
    "vdg > vdg , vd",
    "vd > id",
    "vd > id = ex",
  ]);
}
