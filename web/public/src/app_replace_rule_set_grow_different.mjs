export function app_replace_rule_set_grow_different() {
  let r = {
    name: "Grow Different",
    rules: ["a > b c"],
    goals: [
      {
        start: "a",
        end: "b c",
      },
      {
        start: "a a",
        end: "b c b c",
      },
      {
        start: "a a a a",
        end: "b c b c b c b c",
      },
    ],
    why: "The rules demonstrate that each 'a' in the input is replaced by the sequence 'b', 'c', so any string of n 'a's is transformed into a string of 2n symbols alternating 'b' and 'c'.",
    rules_used: [
      [
        {
          left: ["a"],
          right: ["b", "c"],
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "c"],
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "c"],
        },
      ],
    ],
  };
  return r;
}
