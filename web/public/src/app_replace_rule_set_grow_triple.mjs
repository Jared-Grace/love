export function app_replace_rule_set_grow_triple() {
  return {
    name: "Grow Triple",
    rules: ["a > a a a"],
    goals: [
      {
        start: "a",
        end: "aaa",
      },
      {
        start: "a",
        end: "aaaaa",
      },
      {
        start: "a",
        end: "aaaaaaa",
      },
    ],
  };
}
