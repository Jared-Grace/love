export function app_replace_rule_set_unary_equations_adding() {
  return {
    name: "Unary Equations Adding",
    rules: ["= > 1 = 1", "1 1 > 1 + 1"],
    goals: [
      {
        start: "1=1",
        end: "11=11",
      },
      {
        start: "1=1",
        end: "11=1+1",
      },
      {
        start: "1=1",
        end: "1+1=11",
      },
      {
        start: "1=1",
        end: "1+11=111",
      },
      {
        start: "1=1",
        end: "1+11=11+1",
      },
      {
        start: "1=1",
        end: "1+1+111=11111",
      },
    ],
  };
}
