export function app_replace_rule_set_shrink_different_2() {
  let r = {
    name: "Shrink Different 2",
    rules: ["b c > a", "d e > b"],
    goals: [
      {
        start: "dec",
        end: "a",
      },
      {
        start: "decdec",
        end: "aa",
      },
      {
        start: "decbcbcdec",
        end: "aaaa",
      },
    ],
  };
  return r;
}
