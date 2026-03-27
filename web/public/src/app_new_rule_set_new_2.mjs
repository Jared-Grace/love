export function app_new_rule_set_new_2() {
  let r = {
    name: "Expressions comparison",
    rules: ["a > b"],
    goals: [
      {
        start: "a",
        end: "b",
      },
      {
        start: "a a",
        end: "b a",
      },
    ],
  };
  return r;
}
