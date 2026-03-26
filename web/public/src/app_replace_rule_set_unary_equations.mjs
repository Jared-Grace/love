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
    why: "The replacement rules demonstrate the process of balancing unary equations by expanding both sides equally. The rule '=' → '1 = 1' shows that an equation can be made longer by adding a '1' to both sides of the equals sign, preserving equality. This models the concept of maintaining balance in equations by performing the same operation on both sides.",
  };
  return r;
}
