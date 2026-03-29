export function app_replace_rule_set_double() {
  let r = {
    name: "Double",
    rules: ["a > a a"],
    goals: [
      {
        start: "a",
        end: "a a",
      },
      {
        start: "a",
        end: "a a a",
      },
      {
        start: "a",
        end: "a a a a a",
      },
    ],
    why: "The replacement rule demonstrates a grammar that doubles the symbol 'a' each time the rule is applied, as each 'a' is replaced by two 'a's, leading to exponential growth in the number of 'a's.",
    rules_used: [
      [
        {
          left: ["a"],
          right: ["a", "a"],
        },
      ],
      [
        {
          left: ["a"],
          right: ["a", "a"],
        },
      ],
      [
        {
          left: ["a"],
          right: ["a", "a"],
        },
      ],
    ],
  };
  return r;
}
