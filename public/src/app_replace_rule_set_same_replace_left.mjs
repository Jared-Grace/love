export function app_replace_rule_set_same_replace_left() {
  let r = {
    name: "Same Replace Left",
    rules: ["a a > b a"],
    goals: [
      {
        start: "a a a a",
        end: "a b a a",
      },
      {
        start: "a a a a",
        end: "b a b a",
      },
      {
        start: "a a a a a a a a",
        end: "b a a b a a b a",
      },
    ],
    why: "The replacement rules demonstrate a leftmost, non-overlapping substitution process where every occurrence of two consecutive 'a's is replaced by 'b' followed by 'a'. This shows how a simple rule can systematically transform a string by repeatedly applying the rule to the leftmost eligible pair, resulting in predictable patterns in the output.",
  };
  return r;
}
