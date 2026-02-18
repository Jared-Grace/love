export function app_replace_rule_set_grow_right() {
  return {
    name: "Grow right",
    rules: ["a > a b"],
    goals: [
      {
        start: "a",
        end: "abb",
      },
      {
        start: "aa",
        end: "abbab",
      },
      {
        start: "aa",
        end: "abbabbb",
      },
      {
        start: "aaa",
        end: "ababbabbb",
      },
    ],
  };
}
