export function app_replace_rule_set_grow_left_pair_change_right() {
  let r = {
    name: "Grow Left Pair Change Right",
    rules: ["a > b a", "b b > b c"],
    goals: [
      {
        start: "aa",
        end: "baba",
      },
      {
        start: "a",
        end: "bba",
      },
      {
        start: "ba",
        end: "bca",
      },
      {
        start: "a",
        end: "bbba",
      },
      {
        start: "a",
        end: "bcbca",
      },
      {
        start: "aa",
        end: "bcbabcba",
      },
    ],
  };
  return r;
}
