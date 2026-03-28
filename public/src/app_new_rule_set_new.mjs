import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new() {
  const rules = ["a > b"];
  list_add_multiple(list, items);
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
