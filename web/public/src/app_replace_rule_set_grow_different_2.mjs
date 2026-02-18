export function app_replace_rule_set_grow_different_2() {
  return {
    name: "Grow Different 2",
    rules: ["a > b c", "b > d e"],
    goals: [
      {
        start: "a",
        end: "dec",
      },
      {
        start: "aa",
        end: "decdec",
      },
      {
        start: "aaaa",
        end: "decbcbcdec",
      },
    ],
  };
}
