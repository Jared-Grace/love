import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_primary_abbreviation_ex } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviation_ex.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  list_add_multiple(list, items);
  let abbreviations = {};
  app_replace_rule_set_expressions_primary_abbreviation_ex(abbreviations);
  let r = {
    name: "Statement variable",
    rules: [
      "vs > vk vdg ;",
      "vdg > vd",
      "vdg > vdg , vd",
      "vd > id",
      "vd > id = ex",
    ],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
