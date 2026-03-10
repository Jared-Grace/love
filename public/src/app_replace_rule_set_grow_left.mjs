export function app_replace_rule_set_grow_left() {
  let r = {
    name: "Grow left",
    rules: ["a > b a"],
    goals: [
      {
        start: "a",
        end: "b b a",
      },
      {
        start: "a a",
        end: "b a b b a",
      },
      {
        start: "a a",
        end: "b b b a b b a",
      },
      {
        start: "a a a",
        end: "b b b a b b a b a",
      },
    ],
  };
  return r;
}
