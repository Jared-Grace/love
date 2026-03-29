export function app_replace_rule_set_three_different_grow_same() {
  let r = {
    name: "Three Different Grow Same",
    rules: ["e = b > c e = b c"],
    goals: [
      {
        start: "e = b",
        end: "c c e = b c c",
      },
      {
        start: "e = b",
        end: "c c c c e = b c c c c",
      },
    ],
    why: "The replacement rule demonstrates a grammar where each application of the rule grows the string by adding a 'c' to both the beginning and end, showing symmetric expansion around the core 'e = b' structure.",
    rules_used: [
      [
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
        },
      ],
      [
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
        },
      ],
    ],
  };
  return r;
}
