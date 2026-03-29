export function app_replace_rule_set_shrink_right() {
  let r = {
    name: "Shrink Right",
    rules: ["a b > a"],
    goals: [
      {
        start: "a b b",
        end: "a",
      },
      {
        start: "a b b a b",
        end: "a a",
      },
      {
        start: "a b b a b b b",
        end: "a a",
      },
      {
        start: "a b a b b a b b b",
        end: "a a a",
      },
    ],
    why: "The rules demonstrate a grammar that repeatedly replaces any occurrence of ['a','b'] with ['a'], effectively shrinking sequences by removing 'b's that follow 'a's, which simplifies the input to a sequence of 'a's only.",
    rules_used: [
      [
        {
          left: ["a", "b"],
          right: ["a"],
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a"],
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a"],
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a"],
        },
      ],
    ],
  };
  return r;
}
