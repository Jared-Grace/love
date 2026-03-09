export function app_new_rule_set_new_2() {
  let r = {
    name: "Binary numbers",
    rules: ["a > a b", "a > b", "b > 0", "b > 1"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
