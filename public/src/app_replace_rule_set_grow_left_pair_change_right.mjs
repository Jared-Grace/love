export function app_replace_rule_set_grow_left_pair_change_right() {
  let r = {
    name: "Grow Left Pair Change Right",
    rules: ["a > b a", "b b > b c"],
    goals: [
      {
        start: "a a",
        end: "b a b a",
      },
      {
        start: "a",
        end: "b b a",
      },
      {
        start: "b b a",
        end: "b c a",
      },
      {
        start: "a",
        end: "b b b a",
      },
      {
        start: "a",
        end: "b c b c a",
      },
      {
        start: "a a",
        end: "b c b a b c b a",
      },
    ],
    why: "These rules demonstrate a grammar where 'a' grows into 'b a' (expanding leftwards), and any adjacent 'b b' pair changes to 'b c', showing leftward growth and selective transformation of repeated symbols.",
    rules_used: [
      [
        {
          left: ["b", "b"],
          right: ["b", "c"],
          original: "b b > b c",
        },
        {
          left: ["a"],
          right: ["b", "a"],
          original: "a > b a",
        },
      ],
      [
        {
          left: ["b", "b"],
          right: ["b", "c"],
          original: "b b > b c",
        },
        {
          left: ["a"],
          right: ["b", "a"],
          original: "a > b a",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "a"],
          original: "a > b a",
        },
        {
          left: ["b", "b"],
          right: ["b", "c"],
          original: "b b > b c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "a"],
          original: "a > b a",
        },
        {
          left: ["b", "b"],
          right: ["b", "c"],
          original: "b b > b c",
        },
      ],
      [
        {
          left: ["b", "b"],
          right: ["b", "c"],
          original: "b b > b c",
        },
        {
          left: ["a"],
          right: ["b", "a"],
          original: "a > b a",
        },
      ],
      [
        {
          left: ["b", "b"],
          right: ["b", "c"],
          original: "b b > b c",
        },
        {
          left: ["a"],
          right: ["b", "a"],
          original: "a > b a",
        },
      ],
    ],
  };
  return r;
}
