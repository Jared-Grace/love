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
    why: "The replacement rules demonstrate the generation of unary equations where the number of '1's on each side of the '=' is kept equal, modeling the concept of equality in unary arithmetic by expanding both sides symmetrically.",
    rules_used: [
      [
        {
          left: ["="],
          right: ["1", "=", "1"],
        },
      ],
      [
        {
          left: ["="],
          right: ["1", "=", "1"],
        },
      ],
      [
        {
          left: ["="],
          right: ["1", "=", "1"],
        },
      ],
    ],
  };
  return r;
}
