import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_2() {
  list_add_multiple(rules, ["ae > mue", "ae > ae mo mue", "ao > +", "ao > -"]);
  let r = {
    name: "TODO",
    rules: ["a > b"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
