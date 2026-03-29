export function app_replace_rule_set_shrink_both_same() {
  let r = {
    name: "Shrink Both Same",
    rules: ["a b a > b"],
    goals: [
      {
        start: "c a b a c",
        end: "c b c",
      },
      {
        start: "a a a b a a a",
        end: "a b a",
      },
      {
        start: "a a a a a b a a a a a",
        end: "a b a",
      },
    ],
    why: "The rules demonstrate a grammar that reduces any occurrence of 'a b a' to 'b', effectively shrinking sequences by removing matching 'a's on both sides of a 'b'.",
    rules_used: [
      [
        {
          left: ["a", "b", "a"],
          right: ["b"],
          original: "a b a > b",
        },
      ],
      [
        {
          left: ["a", "b", "a"],
          right: ["b"],
          original: "a b a > b",
        },
      ],
      [
        {
          left: ["a", "b", "a"],
          right: ["b"],
          original: "a b a > b",
        },
      ],
    ],
  };
  return r;
}
