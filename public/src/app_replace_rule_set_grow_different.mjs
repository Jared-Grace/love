export function app_replace_rule_set_grow_different() {
  return {
    name: "Grow Different",
    rules: ["a > b c"],
    goals: [
      {
        start: "a",
        end: "bc",
      },
      {
        start: "aa",
        end: "bcbc",
      },
      {
        start: "aaaa",
        end: "bcbcbcbc",
      },
    ],
  };
}
