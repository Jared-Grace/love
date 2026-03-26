export function app_replace_rule_set_shrink_different() {
  let r = {
    name: "Shrink Different",
    rules: ["b c > a"],
    goals: [
      {
        start: "b c",
        end: "a",
      },
      {
        start: "b c b c",
        end: "a a",
      },
      {
        start: "b c b c b c b c",
        end: "a a a a",
      },
    ],
    why: "The replacement rules demonstrate a grammar that reduces every occurrence of the sequence ['b', 'c'] to a single 'a'. This shows a pattern where pairs of 'b' and 'c' are consistently replaced by 'a', effectively shrinking longer sequences of alternating 'b' and 'c' into a shorter sequence of 'a's, with the number of 'a's corresponding to the number of 'b','c' pairs in the original sequence.",
  };
  return r;
}
