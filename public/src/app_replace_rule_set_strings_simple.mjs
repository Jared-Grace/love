import { list_concat } from "../../../love/public/src/list_concat.mjs";
export function app_replace_rule_set_strings_simple() {
  const rules = ["st > ida"];
  let concated = list_concat(rules, ["st > ida"]);
  let r = {
    name: "Strings simple",
    rules: concated,
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
