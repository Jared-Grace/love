export function app_replace_rule_set_shrink_left_pair_replace_right_same() {
  let r = {
    name: "Shrink Left Pair Replace Right Same",
    rules: ["b a > a", "b c > b b"],
    goals: [
      {
        start: "b a b a",
        end: "a a",
      },
      {
        start: "b b a",
        end: "a",
      },
      {
        start: "b c a",
        end: "b b a",
      },
      {
        start: "b b b a",
        end: "a",
      },
      {
        start: "b c b c a",
        end: "a",
      },
      {
        start: "b c b a b c b a",
        end: "a a",
      },
    ],
    why: "The rules demonstrate a grammar that reduces specific left-side pairs ('b','a' to 'a' and 'b','c' to 'b','b'), effectively shrinking sequences by replacing certain pairs, which allows transformation of longer sequences into shorter target forms by repeated application.",
    rules_used: [
      [
        {
          left: ["b", "c"],
          right: ["b", "b"],
        },
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
        {
          left: ["b", "c"],
          right: ["b", "b"],
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["b", "b"],
        },
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
        {
          left: ["b", "c"],
          right: ["b", "b"],
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
        },
        {
          left: ["b", "c"],
          right: ["b", "b"],
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["b", "b"],
        },
        {
          left: ["b", "a"],
          right: ["a"],
        },
      ],
    ],
  };
  return r;
}
