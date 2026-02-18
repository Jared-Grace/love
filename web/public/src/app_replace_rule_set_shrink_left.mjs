export function app_replace_rule_set_shrink_left() {
  return {
    name: "Shrink left",
    rules: ["b a > a"],
    goals: [
      {
        start: "bba",
        end: "a",
      },
      {
        start: "babba",
        end: "aa",
      },
      {
        start: "bbbabba",
        end: "aa",
      },
      {
        start: "bbbabbaba",
        end: "aaa",
      },
    ],
  };
}
