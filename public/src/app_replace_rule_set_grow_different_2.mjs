export function app_replace_rule_set_grow_different_2() {
  let r = {
    name: "Grow Different 2",
    rules: ["a > b c", "b > d e"],
    goals: [
      {
        start: "a",
        end: "d e c",
      },
      {
        start: "a a",
        end: "d e c d e c",
      },
      {
        start: "a a a a",
        end: "d e c b c b c d e c",
      },
    ],
    why: "The rules demonstrate a context-free grammar where 'a' expands to 'b c' and 'b' further expands to 'd e', allowing derivations from 'a' to sequences like 'd e c', and showing how repeated applications generate longer strings by recursively expanding each 'a'.",
    rules_used: [
      [
        {
          left: ["b"],
          right: ["d", "e"],
        },
        {
          left: ["a"],
          right: ["b", "c"],
        },
      ],
      [
        {
          left: ["b"],
          right: ["d", "e"],
        },
        {
          left: ["a"],
          right: ["b", "c"],
        },
      ],
      [
        {
          left: ["b"],
          right: ["d", "e"],
        },
        {
          left: ["a"],
          right: ["b", "c"],
        },
      ],
    ],
  };
  return r;
}
