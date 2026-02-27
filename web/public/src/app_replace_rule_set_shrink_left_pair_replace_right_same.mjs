export function app_replace_rule_set_shrink_left_pair_replace_right_same() {
  let r = {
    name: "Shrink Left Pair Replace Right Same",
    rules: ["b a > a", "b c > b b"],
    goals: [
      {
        start: "baba",
        end: "aa",
      },
      {
        start: "bba",
        end: "a",
      },
      {
        start: "bca",
        end: "ba",
      },
      {
        start: "bbba",
        end: "a",
      },
      {
        start: "bcbca",
        end: "a",
      },
      {
        start: "bcbabcba",
        end: "aa",
      },
    ],
  };
  return r;
}
