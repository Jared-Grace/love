export function app_replace_rule_set_grow_right() {
  let r = {
    name: "Grow right",
    rules: ["a > a b"],
    goals: [
      {
        start: "a",
        end: "a b b",
      },
      {
        start: "a a",
        end: "a b b a b",
      },
      {
        start: "a a",
        end: "a b b a b b b",
      },
      {
        start: "a a a",
        end: "a b a b b a b b b",
      },
    ],
  };
  return r;
}
