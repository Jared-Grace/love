export function app_replace_rule_set_shrink_left_pair_replace_right_same() {
  let r = {
    name: "Shrink Left Pair Replace Right Same",
    rules: ["b a > a", "b c > b b"],
    goals: [
      {
        start: "b a b a",
        end: "a a",
      },
      {
        start: "b b a",
        end: "a",
      },
      {
        start: "b c a",
        end: "b b a",
      },
      {
        start: "b b b a",
        end: "a",
      },
      {
        start: "b c b c a",
        end: "a",
      },
      {
        start: "b c b a b c b a",
        end: "a a",
      },
    ],
  };
  return r;
}
