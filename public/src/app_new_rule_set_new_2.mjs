export function app_new_rule_set_new_2() {
  let r = {
    name: "TODO",
    rules: ["a > b"],
    goals: [
      {
        start: "a",
        end: "b",
      },
      {
        start: "aa",
        end: "ba",
      },
    ],
  };
  return r;
}
