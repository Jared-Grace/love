import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_expressions_1() {
  const rules = [
    "pe > id",
    "pe > li",
    "pe > ( e )",
    "li > n",
    "n > de",
    "n > i",
    "li > st",
  ];
  list_add_multiple(list, items);
  let r = {
    name: "Expressions 1",
    rules: rules,
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
