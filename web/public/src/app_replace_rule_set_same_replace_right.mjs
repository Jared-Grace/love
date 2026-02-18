export function app_replace_rule_set_same_replace_right() {
  return {
    name: "Same Replace Right",
    rules: ["a a > a b"],
    goals: [
      {
        start: "aaaa",
        end: "aaba",
      },
      {
        start: "aaaa",
        end: "abab",
      },
      {
        start: "aaaaaaaa",
        end: "abaabaab",
      },
    ],
  };
}
