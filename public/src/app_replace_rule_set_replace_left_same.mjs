export function app_replace_rule_set_replace_left_same() {
  let r = {
    name: "Replace Left Same",
    rules: ["b a > a a"],
    goals: [
      {
        start: "b a b a b a",
        end: "b a a a b a",
      },
      {
        start: "b a b a",
        end: "a a a a",
      },
      {
        start: "b a a b a a b a",
        end: "a a a a a a a a",
      },
    ],
    why: "The rules demonstrate a grammar that replaces every occurrence of 'b' immediately followed by 'a' with 'a' followed by 'a', effectively converting all 'b's that are followed by 'a' into 'a's, while preserving the sequence length.",
    rules_used: [
      [
        {
          left: ["b", "a"],
          right: ["a", "a"],
          original: "b a > a a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a", "a"],
          original: "b a > a a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a", "a"],
          original: "b a > a a",
        },
      ],
    ],
  };
  return r;
}
