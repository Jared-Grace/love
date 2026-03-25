export function app_new_rule_set_new_2() {
  let r = {
    name: "Expressions unary",
    rules: ["ue > ce", "ue > uo ue", "uo > ue"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
