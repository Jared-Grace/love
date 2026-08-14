export function app_replace_rule_set_unary_equations() {
  let r = {
    name: "Unary Equations",
    rules: ["= > 1 = 1"],
    goals: [
      {
        start: "1   =   1",
        end: "1   1   =   1   1",
      },
      {
        start: "1   =   1",
        end: "1   1   1   =   1   1   1",
      },
      {
        start: "1   =   1",
        end: "1   1   1   1   1   =   1   1   1   1   1",
      },
    ],
    why: "The equals sign grows a '1' on each side at once, so the two sides can never fall out of step. Counting with one mark per unit like this is called unary.",
  };
  return r;
}
