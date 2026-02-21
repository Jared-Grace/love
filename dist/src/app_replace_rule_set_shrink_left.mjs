export function app_replace_rule_set_shrink_left() {
  let r = {
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
  return r;
}
