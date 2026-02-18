export function app_replace_rule_set_same_replace_left() {
  return {
    name: "Same Replace Left",
    rules: ["a a > b a"],
    goals: [
      {
        start: "aaaa",
        end: "abaa",
      },
      {
        start: "aaaa",
        end: "baba",
      },
      {
        start: "aaaaaaaa",
        end: "baabaaba",
      },
    ],
  };
}
