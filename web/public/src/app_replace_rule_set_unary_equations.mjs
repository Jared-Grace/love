export function app_replace_rule_set_unary_equations() {
  return {
    name: "Unary Equations",
    rules: ["= > 1 = 1"],
    goals: [
      {
        start: "1=1",
        end: "11=11",
      },
      {
        start: "1=1",
        end: "111=111",
      },
      {
        start: "1=1",
        end: "11111=11111",
      },
    ],
  };
}
