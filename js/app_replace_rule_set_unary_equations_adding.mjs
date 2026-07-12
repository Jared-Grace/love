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
    why: "The replacement rules demonstrate unary addition by expanding both sides of an equation using only the symbol '1' and '+', showing how numbers and their sums can be represented and manipulated in unary notation.",
  };
  return r;
}
