export function app_replace_rule_set_swap() {
  let r = {
    name: "Swap",
    rules: ["a b > b a"],
    goals: [
      {
        start: "a b b",
        end: "b b a",
      },
      {
        start: "a b b b b",
        end: "b b b b a",
      },
      {
        start: "a b b a b b",
        end: "b b b b a a",
      },
      {
        start: "a a a b",
        end: "b a a a",
      },
    ],
    why: "The replacement rules demonstrate a grammar for swapping adjacent 'a' and 'b' symbols, effectively moving all 'a's to the end of the sequence by repeatedly swapping any 'a' that appears before a 'b'.",
    rules_used: [
      [
        {
          left: ["a", "b"],
          right: ["b", "a"],
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "a"],
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "a"],
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "a"],
        },
      ],
    ],
  };
  return r;
}
