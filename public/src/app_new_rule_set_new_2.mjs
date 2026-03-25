export function app_new_rule_set_new_2() {
  let r = {
    name: "Expressions unary",
    rules: ["eu > b"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
