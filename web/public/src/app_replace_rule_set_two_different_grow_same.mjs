export function app_replace_rule_set_two_different_grow_same() {
  let r = {
    name: "Two Different Grow Same",
    rules: ["e b > c e b c"],
    goals: [
      {
        start: "e b",
        end: "c c e b c c",
      },
      {
        start: "e b",
        end: "c c c c e b c c c c",
      },
    ],
    why: "The replacement rule demonstrates a context-free grammar where the sequence ['e','b'] can be expanded by surrounding it with 'c's on both sides, allowing for repeated growth of 'c' pairs around the original sequence, as shown by the progressively larger goal sequences.",
    rules_used: [
      [
        {
          left: ["e", "b"],
          right: ["c", "e", "b", "c"],
        },
      ],
      [
        {
          left: ["e", "b"],
          right: ["c", "e", "b", "c"],
        },
      ],
    ],
  };
  return r;
}
