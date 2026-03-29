export function app_replace_rule_set_same_replace_right() {
  let r = {
    name: "Same Replace Right",
    rules: ["a a > a b"],
    goals: [
      {
        start: "a a a a",
        end: "a a b a",
      },
      {
        start: "a a a a",
        end: "a b a b",
      },
      {
        start: "a a a a a a a a",
        end: "a b a a b a a b",
      },
    ],
    why: "The rules demonstrate a grammar where every occurrence of two consecutive 'a's can be replaced by 'a','b', allowing the transformation of any even-length sequence of 'a's into a sequence where each original pair is replaced, showing a systematic rightward replacement pattern.",
    rules_used: [
      [
        {
          left: ["a", "a"],
          right: ["a", "b"],
          original: "a a > a b",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a", "b"],
          original: "a a > a b",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a", "b"],
          original: "a a > a b",
        },
      ],
    ],
  };
  return r;
}
