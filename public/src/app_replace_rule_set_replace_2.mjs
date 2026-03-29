export function app_replace_rule_set_replace_2() {
  let r = {
    name: "Replace 2",
    rules: ["a > b", "c > d"],
    goals: [
      {
        start: "a c",
        end: "b d",
      },
      {
        start: "a c a",
        end: "b d b",
      },
      {
        start: "c a b a c d",
        end: "d b b b d d",
      },
      {
        start: "c a a a a a c",
        end: "d b a b a b d",
      },
    ],
    why: "The replacement rules demonstrate a simple substitution grammar where every 'a' is replaced by 'b' and every 'c' is replaced by 'd', as shown by the transformation of each start sequence into its corresponding end sequence by applying these rules to each symbol independently.",
    rules_used: [
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
        {
          left: ["c"],
          right: ["d"],
          original: "c > d",
        },
      ],
      [
        {
          left: ["c"],
          right: ["d"],
          original: "c > d",
        },
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["c"],
          right: ["d"],
          original: "c > d",
        },
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
        {
          left: ["c"],
          right: ["d"],
          original: "c > d",
        },
      ],
    ],
  };
  return r;
}
