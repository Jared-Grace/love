export function app_new_rule_set_new_2() {
  let r = {
    name: "Expressions 2",
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
