import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_new_rule_set_new() {
  let rules = [];
  list_add_multiple(rules, ["a > b"]);
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
