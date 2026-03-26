export function app_replace_rule_set_shrink_right() {
  let r = {
    name: "Shrink Right",
    rules: ["a b > a"],
    goals: [
      {
        start: "a b b",
        end: "a",
      },
      {
        start: "a b b a b",
        end: "a a",
      },
      {
        start: "a b b a b b b",
        end: "a a",
      },
      {
        start: "a b a b b a b b b",
        end: "a a a",
      },
    ],
  };
  return r;
}
