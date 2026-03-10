export function app_replace_rule_set_grow_left_pair_change_right() {
  let r = {
    name: "Grow Left Pair Change Right",
    rules: ["a > b a", "b b > b c"],
    goals: [
      {
        start: "a a",
        end: "b a b a",
      },
      {
        start: "a",
        end: "b b a",
      },
      {
        start: "b b a",
        end: "b c a",
      },
      {
        start: "a",
        end: "b b b a",
      },
      {
        start: "a",
        end: "b c b c a",
      },
      {
        start: "a a",
        end: "b c b a b c b a",
      },
    ],
  };
  return r;
}
