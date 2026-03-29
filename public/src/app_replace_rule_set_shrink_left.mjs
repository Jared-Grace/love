export function app_replace_rule_set_shrink_left() {
  let r = {
    name: "Shrink Left",
    rules: ["b a > a"],
    goals: [
      {
        start: "b b a",
        end: "a",
      },
      {
        start: "b a b b a",
        end: "a a",
      },
      {
        start: "b b b a b b a",
        end: "a a",
      },
      {
        start: "b b b a b b a b a",
        end: "a a a",
      },
    ],
    why: "The rules demonstrate a left-shrinking process where every occurrence of 'b' immediately followed by 'a' is replaced by 'a', effectively removing leading 'b's before each 'a' and reducing the sequence to only 'a's.",
    rules_used: [
      [
        {
          left: ["b", "a"],
          right: ["a"],
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
        },
      ],
    ],
  };
  return r;
}
