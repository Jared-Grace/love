export function app_replace_rule_set_half() {
  return {
    name: "Half",
    rules: ["a a > a"],
    goals: [
      {
        start: "aa",
        end: "a",
      },
      {
        start: "aaa",
        end: "a",
      },
      {
        start: "aaaaa",
        end: "a",
      },
    ],
  };
}
