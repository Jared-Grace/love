export function app_replace_rule_set_unary_equations_adding() {
  let r = {
    name: "Unary Equations Adding",
    rules: ["= > 1 = 1", "1 1 > 1 + 1"],
    goals: [
      {
        start: "1 = 1",
        end: "1 1 = 1 1",
      },
      {
        start: "1 = 1",
        end: "1 1 = 1 + 1",
      },
      {
        start: "1 = 1",
        end: "1 + 1 = 1 1",
      },
      {
        start: "1 = 1",
        end: "1 + 1 1 = 1 1 1",
      },
      {
        start: "1 = 1",
        end: "1 + 1 1 = 1 1 + 1",
      },
      {
        start: "1 = 1",
        end: "1 + 1 + 1 1 1 = 1 1 1 1 1",
      },
    ],
    why: "The replacement rules demonstrate how to represent addition using unary notation and equations. The rules show that the equals sign can be expanded by adding a '1' to both sides, and that adjacent '1's can be replaced with '1 + 1', effectively building up unary addition expressions step by step.",
  };
  return r;
}
