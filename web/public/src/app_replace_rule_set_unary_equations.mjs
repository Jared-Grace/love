export function app_replace_rule_set_unary_equations() {
  let r = {
    name: "Unary Equations",
    rules: ["= > 1 = 1"],
    goals: [
      {
        start: "1 = 1",
        end: "1 1 = 1 1",
      },
      {
        start: "1 = 1",
        end: "1 1 1 = 1 1 1",
      },
      {
        start: "1 = 1",
        end: "1 1 1 1 1 = 1 1 1 1 1",
      },
    ],
  };
  return r;
}
