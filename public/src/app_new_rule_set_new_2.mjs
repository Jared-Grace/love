import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  list_add_multiple(rules, ["bs > { smg }"]);
  let abbreviations = {};
  let r = {
    name: "TODO",
    rules,
    abbreviations,
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
