export function app_replace_rule_set_grow_left() {
  let r = {
    name: "Grow left",
    rules: ["a > b a"],
    goals: [
      {
        start: "a",
        end: "bba",
      },
      {
        start: "aa",
        end: "babba",
      },
      {
        start: "aa",
        end: "bbbabba",
      },
      {
        start: "aaa",
        end: "bbbabbaba",
      },
    ],
  };
  return r;
}
