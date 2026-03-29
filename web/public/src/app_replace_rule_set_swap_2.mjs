export function app_replace_rule_set_swap_2() {
  let r = {
    name: "Swap 2",
    rules: ["a b > b a", "a c > c a"],
    goals: [
      {
        start: "a b c",
        end: "b c a",
      },
      {
        start: "a c b b c",
        end: "c b b c a",
      },
      {
        start: "a c b a c c",
        end: "c b c c a a",
      },
    ],
    why: "The replacement rules demonstrate a grammar for swapping the first 'a' in a sequence with the next 'b' or 'c' to its right, effectively moving 'a' rightward past 'b' or 'c' one step at a time.",
    rules_used: [
      [
        {
          left: ["a", "c"],
          right: ["c", "a"],
          original: "a c > c a",
        },
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
        {
          left: ["a", "c"],
          right: ["c", "a"],
          original: "a c > c a",
        },
      ],
      [
        {
          left: ["a", "c"],
          right: ["c", "a"],
          original: "a c > c a",
        },
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
      ],
    ],
  };
  return r;
}
