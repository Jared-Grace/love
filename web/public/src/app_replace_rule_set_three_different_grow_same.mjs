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
    why: "The replacement rules demonstrate a grammar where the non-terminal 'e = b' can be expanded by surrounding it with 'c's on both sides, effectively growing the sequence symmetrically. This shows how the rule can be applied repeatedly to generate strings with an equal number of 'c's added to both the beginning and end of the original sequence.",
  };
  return r;
}
