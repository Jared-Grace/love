import { list_concat } from "../../../love/public/src/list_concat.mjs";
export function app_replace_rule_set_strings_simple() {
  const rules = [
    "ida > idf",
    "ida > di",
    "idf > A",
    "idf > B",
    "idf > h",
    "idf > J",
    "idf > l",
    "idf > t",
    "idf > u",
    "idf > v",
    "idf > $",
    "idf > _",
    "di > 0",
    "di > 1",
    "di > 3",
  ];
  let concated = list_concat(["st > ida"], rules);
  let r = {
    name: "Strings simple",
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
