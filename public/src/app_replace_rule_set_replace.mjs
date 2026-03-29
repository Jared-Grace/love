export function app_replace_rule_set_replace() {
  let r = {
    name: "Replace",
    rules: ["a > b"],
    goals: [
      {
        start: "a",
        end: "b",
      },
      {
        start: "a a",
        end: "b b",
      },
      {
        start: "a a a",
        end: "b b b",
      },
      {
        start: "a a a a",
        end: "a b b a",
      },
      {
        start: "a a a a a a a",
        end: "a b a b a b a",
      },
    ],
    why: "The rules demonstrate a grammar where every 'a' in the input can be independently replaced by 'b', allowing any combination of 'a's and 'b's in the output, as shown by the varied goal examples.",
    rules_used: [
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
    ],
  };
  return r;
}
