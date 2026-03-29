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
    why: "The rules demonstrate a grammar where every occurrence of two consecutive 'a's is replaced by 'b','a', allowing multiple non-overlapping replacements from left to right, which transforms sequences of 'a's into alternating 'b','a' patterns.",
    rules_used: [
      [
        {
          left: ["a", "a"],
          right: ["b", "a"],
          original: "a a > b a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["b", "a"],
          original: "a a > b a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["b", "a"],
          original: "a a > b a",
        },
      ],
    ],
  };
  return r;
}
