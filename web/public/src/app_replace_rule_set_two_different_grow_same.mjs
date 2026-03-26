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
    why: "The replacement rules demonstrate a context-free grammar where the sequence ['e', 'b'] can be expanded by surrounding it with 'c's on both sides, resulting in ['c', 'e', 'b', 'c']. This rule can be applied recursively, allowing the sequence to grow symmetrically with additional 'c's on both ends each time. The goals show how repeated application of the rule leads to increasingly longer sequences with the same central ['e', 'b'] structure.",
  };
  return r;
}
