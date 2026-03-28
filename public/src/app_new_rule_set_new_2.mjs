import { js_keyword_let } from "../../../love/public/src/js_keyword_let.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_primary_abbreviation_ex } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviation_ex.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  list_add_multiple(rules, [
    "vs > vk vdg ;",
    "vk > " + js_keyword_let(),
    "vk > const",
    "vk > var",
    "vdg > vd",
    "vdg > vdg , vd",
    "vd > id",
    "vd > id = ex",
    "id > x",
    "id > y",
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
        end: "b",
      },
    ],
  };
  return r;
}
