import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_replace_rule_set_new() {
  let rules = [];
  list_add_multiple(rules, ["a > b"]);
  let r = {
    name: "TODO",
    rules,
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
