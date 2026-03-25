export function app_new_rule_set_new_2() {
  let r = {
    name: "Expressions function calls",
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
