export function app_replace_rule_sets_fns_rules_used() {
  let r = {
    "Binary Counting Prepare 1": [
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["1"],
          right: ["1", "1"],
          original: "1 > 1 1",
        },
      ],
      [
        {
          left: ["1"],
          right: ["1", "1"],
          original: "1 > 1 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
    ],
    "Binary Numbers Simple 2": [
      [
        {
          left: ["b"],
          right: ["b", "b"],
          original: "b > b b",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
      ],
      [
        {
          left: ["b"],
          right: ["b", "b"],
          original: "b > b b",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
      ],
      [
        {
          left: ["b"],
          right: ["b", "b"],
          original: "b > b b",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
      ],
      [
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["b"],
          right: ["b", "b"],
          original: "b > b b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["b"],
          right: ["b", "b"],
          original: "b > b b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["b"],
          right: ["b", "b"],
          original: "b > b b",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
      ],
    ],
    "Binary Numbers Simple": [
      [
        {
          left: ["0"],
          right: ["1"],
          original: "0 > 1",
        },
        {
          left: ["0"],
          right: ["0", "0"],
          original: "0 > 0 0",
        },
      ],
      [
        {
          left: ["0"],
          right: ["0", "0"],
          original: "0 > 0 0",
        },
        {
          left: ["0"],
          right: ["1"],
          original: "0 > 1",
        },
      ],
      [
        {
          left: ["0"],
          right: ["0", "0"],
          original: "0 > 0 0",
        },
        {
          left: ["0"],
          right: ["1"],
          original: "0 > 1",
        },
      ],
      [
        {
          left: ["0"],
          right: ["1"],
          original: "0 > 1",
        },
        {
          left: ["0"],
          right: ["0", "0"],
          original: "0 > 0 0",
        },
      ],
      [
        {
          left: ["0"],
          right: ["0", "0"],
          original: "0 > 0 0",
        },
        {
          left: ["0"],
          right: ["1"],
          original: "0 > 1",
        },
      ],
      [
        {
          left: ["0"],
          right: ["1"],
          original: "0 > 1",
        },
        {
          left: ["0"],
          right: ["0", "0"],
          original: "0 > 0 0",
        },
      ],
    ],
    "Three Different Grow Same": [
      [
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
      [
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
    ],
    "Binary Numbers": [
      [
        {
          left: ["g"],
          right: ["b", "g"],
          original: "g > b g",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["g"],
          right: ["b"],
          original: "g > b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["g"],
          right: ["b"],
          original: "g > b",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
      ],
      [
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["g"],
          right: ["b", "g"],
          original: "g > b g",
        },
        {
          left: ["g"],
          right: ["b"],
          original: "g > b",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
      ],
      [
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["g"],
          right: ["b", "g"],
          original: "g > b g",
        },
        {
          left: ["g"],
          right: ["b"],
          original: "g > b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["g"],
          right: ["b", "g"],
          original: "g > b g",
        },
        {
          left: ["g"],
          right: ["b"],
          original: "g > b",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
      ],
      [
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["g"],
          right: ["b", "g"],
          original: "g > b g",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["g"],
          right: ["b"],
          original: "g > b",
        },
      ],
    ],
    "Shrink Same Three Different": [
      [
        {
          left: ["c", "e", "=", "b", "c"],
          right: ["e", "=", "b"],
          original: "c e = b c > e = b",
        },
      ],
      [
        {
          left: ["c", "e", "=", "b", "c"],
          right: ["e", "=", "b"],
          original: "c e = b c > e = b",
        },
      ],
    ],
    "Grow Different": [
      [
        {
          left: ["a"],
          right: ["b", "c"],
          original: "a > b c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "c"],
          original: "a > b c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "c"],
          original: "a > b c",
        },
      ],
    ],
    "Boolean Literal": [
      [
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
      ],
      [
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
      ],
    ],
    Double: [
      [
        {
          left: ["a"],
          right: ["a", "a"],
          original: "a > a a",
        },
      ],
      [
        {
          left: ["a"],
          right: ["a", "a"],
          original: "a > a a",
        },
      ],
      [
        {
          left: ["a"],
          right: ["a", "a"],
          original: "a > a a",
        },
      ],
    ],
    "Two Different Grow Same": [
      [
        {
          left: ["e", "b"],
          right: ["c", "e", "b", "c"],
          original: "e b > c e b c",
        },
      ],
      [
        {
          left: ["e", "b"],
          right: ["c", "e", "b", "c"],
          original: "e b > c e b c",
        },
      ],
    ],
    "Shrink Different": [
      [
        {
          left: ["b", "c"],
          right: ["a"],
          original: "b c > a",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a"],
          original: "b c > a",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a"],
          original: "b c > a",
        },
      ],
    ],
    Half: [
      [
        {
          left: ["a", "a"],
          right: ["a"],
          original: "a a > a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a"],
          original: "a a > a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a"],
          original: "a a > a",
        },
      ],
    ],
    "Grow Same Three Different": [
      [
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
      [
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
    ],
    "Replace Left Same": [
      [
        {
          left: ["b", "a"],
          right: ["a", "a"],
          original: "b a > a a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a", "a"],
          original: "b a > a a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a", "a"],
          original: "b a > a a",
        },
      ],
    ],
    "Same Replace Left": [
      [
        {
          left: ["a", "a"],
          right: ["b", "a"],
          original: "a a > b a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["b", "a"],
          original: "a a > b a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["b", "a"],
          original: "a a > b a",
        },
      ],
    ],
    "Replace Right Same": [
      [
        {
          left: ["a", "b"],
          right: ["a", "a"],
          original: "a b > a a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a", "a"],
          original: "a b > a a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a", "a"],
          original: "a b > a a",
        },
      ],
    ],
    "Right Change": [
      [
        {
          left: ["a", "b"],
          right: ["a", "c"],
          original: "a b > a c",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a", "c"],
          original: "a b > a c",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a", "c"],
          original: "a b > a c",
        },
      ],
    ],
    "Grow Triple": [
      [
        {
          left: ["a"],
          right: ["a", "a", "a"],
          original: "a > a a a",
        },
      ],
      [
        {
          left: ["a"],
          right: ["a", "a", "a"],
          original: "a > a a a",
        },
      ],
      [
        {
          left: ["a"],
          right: ["a", "a", "a"],
          original: "a > a a a",
        },
      ],
    ],
    "Unary Equations": [
      [
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
      [
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
      [
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
    ],
    "Same Replace Right": [
      [
        {
          left: ["a", "a"],
          right: ["a", "b"],
          original: "a a > a b",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a", "b"],
          original: "a a > a b",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a", "b"],
          original: "a a > a b",
        },
      ],
    ],
    "Shrink Triple": [
      [
        {
          left: ["a", "a", "a"],
          right: ["a"],
          original: "a a a > a",
        },
      ],
      [
        {
          left: ["a", "a", "a"],
          right: ["a"],
          original: "a a a > a",
        },
      ],
      [
        {
          left: ["a", "a", "a"],
          right: ["a"],
          original: "a a a > a",
        },
      ],
    ],
    "Shrink Both Same": [
      [
        {
          left: ["a", "b", "a"],
          right: ["b"],
          original: "a b a > b",
        },
      ],
      [
        {
          left: ["a", "b", "a"],
          right: ["b"],
          original: "a b a > b",
        },
      ],
      [
        {
          left: ["a", "b", "a"],
          right: ["b"],
          original: "a b a > b",
        },
      ],
    ],
    "Grow Between": [
      [
        {
          left: ["a", "a"],
          right: ["a", "b", "a"],
          original: "a a > a b a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a", "b", "a"],
          original: "a a > a b a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a", "b", "a"],
          original: "a a > a b a",
        },
      ],
    ],
    "Grow Different 2": [
      [
        {
          left: ["a"],
          right: ["b", "c"],
          original: "a > b c",
        },
        {
          left: ["b"],
          right: ["d", "e"],
          original: "b > d e",
        },
      ],
      [
        {
          left: ["b"],
          right: ["d", "e"],
          original: "b > d e",
        },
        {
          left: ["a"],
          right: ["b", "c"],
          original: "a > b c",
        },
      ],
      [
        {
          left: ["b"],
          right: ["d", "e"],
          original: "b > d e",
        },
        {
          left: ["a"],
          right: ["b", "c"],
          original: "a > b c",
        },
      ],
    ],
    "Shrink Different 2": [
      [
        {
          left: ["d", "e"],
          right: ["b"],
          original: "d e > b",
        },
        {
          left: ["b", "c"],
          right: ["a"],
          original: "b c > a",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a"],
          original: "b c > a",
        },
        {
          left: ["d", "e"],
          right: ["b"],
          original: "d e > b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a"],
          original: "b c > a",
        },
        {
          left: ["d", "e"],
          right: ["b"],
          original: "d e > b",
        },
      ],
    ],
    "Swap 2": [
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
    ],
    "Binary Counting Prepare 2": [
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["1"],
          right: ["1", "1"],
          original: "1 > 1 1",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["1"],
          right: ["1", "1"],
          original: "1 > 1 1",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["1"],
          right: ["1", "1"],
          original: "1 > 1 1",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
      ],
    ],
    "Swap 3": [
      [
        {
          left: ["a", "d"],
          right: ["d", "a"],
          original: "a d > d a",
        },
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
        {
          left: ["a", "d"],
          right: ["d", "a"],
          original: "a d > d a",
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
        {
          left: ["a", "d"],
          right: ["d", "a"],
          original: "a d > d a",
        },
      ],
    ],
    "Grow Right": [
      [
        {
          left: ["g"],
          right: ["g", "s"],
          original: "g > g s",
        },
      ],
      [
        {
          left: ["g"],
          right: ["g", "s"],
          original: "g > g s",
        },
      ],
      [
        {
          left: ["g"],
          right: ["g", "s"],
          original: "g > g s",
        },
      ],
      [
        {
          left: ["g"],
          right: ["g", "s"],
          original: "g > g s",
        },
      ],
    ],
    "Grow Left": [
      [
        {
          left: ["g"],
          right: ["s", "g"],
          original: "g > s g",
        },
      ],
      [
        {
          left: ["g"],
          right: ["s", "g"],
          original: "g > s g",
        },
      ],
      [
        {
          left: ["g"],
          right: ["s", "g"],
          original: "g > s g",
        },
      ],
      [
        {
          left: ["g"],
          right: ["s", "g"],
          original: "g > s g",
        },
      ],
    ],
    "Shrink Right": [
      [
        {
          left: ["a", "b"],
          right: ["a"],
          original: "a b > a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a"],
          original: "a b > a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a"],
          original: "a b > a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a"],
          original: "a b > a",
        },
      ],
    ],
    Swap: [
      [
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
      ],
      [
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
      ],
    ],
    "Shrink Left": [
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
    ],
    "Replace Flow": [
      [
        {
          left: ["b"],
          right: ["c"],
          original: "b > c",
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
          left: ["b"],
          right: ["c"],
          original: "b > c",
        },
      ],
      [
        {
          left: ["b"],
          right: ["c"],
          original: "b > c",
        },
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["c"],
          original: "b > c",
        },
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
    ],
    "Shrink Between": [
      [
        {
          left: ["a", "b", "a"],
          right: ["a", "a"],
          original: "a b a > a a",
        },
      ],
      [
        {
          left: ["a", "b", "a"],
          right: ["a", "a"],
          original: "a b a > a a",
        },
      ],
      [
        {
          left: ["a", "b", "a"],
          right: ["a", "a"],
          original: "a b a > a a",
        },
      ],
    ],
    "Replace 2": [
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
    Replace: [
      [
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
      ],
      [
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
      ],
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
    ],
    "Swap Change Right": [
      [
        {
          left: ["a", "b"],
          right: ["b", "c"],
          original: "a b > b c",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "c"],
          original: "a b > b c",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "c"],
          original: "a b > b c",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "c"],
          original: "a b > b c",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "c"],
          original: "a b > b c",
        },
      ],
    ],
    "Statements Block": [
      [
        {
          left: ["bs"],
          right: ["{", "}"],
          original: "bs > { }",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["ex"],
          right: ["true"],
          original: "ex > true",
        },
      ],
      [
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["sm"],
          right: [";"],
          original: "sm > ;",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
      ],
      [
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["update", "(", ")"],
          original: "ex > update ( )",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
        {
          left: ["ex"],
          right: ["true"],
          original: "ex > true",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["ex"],
          right: ["update", "(", ")"],
          original: "ex > update ( )",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
      ],
    ],
    "Statements While": [
      [
        {
          left: ["ex"],
          right: ["x", "<", "3"],
          original: "ex > x < 3",
        },
        {
          left: ["ex"],
          right: ["x", "=", "x", "+", "1"],
          original: "ex > x = x + 1",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ws"],
          right: ["while", "(", "ex", ")", "sm"],
          original: "ws > while ( ex ) sm",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ws"],
          right: ["while", "(", "ex", ")", "sm"],
          original: "ws > while ( ex ) sm",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["ex"],
          right: ["y", ">", "0"],
          original: "ex > y > 0",
        },
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["ex"],
          right: ["y", "=", "y", "-", "1"],
          original: "ex > y = y - 1",
        },
      ],
      [
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["ex"],
          right: ["!", "found", "(", "door", ")"],
          original: "ex > ! found ( door )",
        },
        {
          left: ["ws"],
          right: ["while", "(", "ex", ")", "sm"],
          original: "ws > while ( ex ) sm",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ask", "(", ")"],
          original: "ex > ask ( )",
        },
        {
          left: ["ex"],
          right: ["seek", "(", ")"],
          original: "ex > seek ( )",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
      ],
    ],
    "Statements Simple": [
      [
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
        {
          left: ["ex"],
          right: ["update", "(", ")"],
          original: "ex > update ( )",
        },
        {
          left: ["sm"],
          right: [";"],
          original: "sm > ;",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["return", ";"],
          original: "sm > return ;",
        },
        {
          left: ["sm"],
          right: [";"],
          original: "sm > ;",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["update", "(", ")"],
          original: "ex > update ( )",
        },
        {
          left: ["ex"],
          right: ["true"],
          original: "ex > true",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["true"],
          original: "ex > true",
        },
        {
          left: ["sm"],
          right: ["return", ";"],
          original: "sm > return ;",
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
      ],
    ],
    "Expand Collapse": [
      [
        {
          left: ["a"],
          right: ["b", "b"],
          original: "a > b b",
        },
        {
          left: ["b", "b"],
          right: ["c"],
          original: "b b > c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "b"],
          original: "a > b b",
        },
        {
          left: ["b", "b"],
          right: ["c"],
          original: "b b > c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "b"],
          original: "a > b b",
        },
        {
          left: ["b", "b"],
          right: ["c"],
          original: "b b > c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "b"],
          original: "a > b b",
        },
        {
          left: ["b", "b"],
          right: ["c"],
          original: "b b > c",
        },
      ],
      [
        {
          left: ["b", "b"],
          right: ["c"],
          original: "b b > c",
        },
        {
          left: ["a"],
          right: ["b", "b"],
          original: "a > b b",
        },
      ],
      [
        {
          left: ["b", "b"],
          right: ["c"],
          original: "b b > c",
        },
        {
          left: ["a"],
          right: ["b", "b"],
          original: "a > b b",
        },
      ],
    ],
    "Statements For": [
      [
        {
          left: ["fs"],
          right: ["for", "(", "ex", ";", "ex", ";", "ex", ")", "sm"],
          original: "fs > for ( ex ; ex ; ex ) sm",
        },
        {
          left: ["ex"],
          right: ["i", "=", "i", "+", "1"],
          original: "ex > i = i + 1",
        },
        {
          left: ["ex"],
          right: ["i", "=", "0"],
          original: "ex > i = 0",
        },
        {
          left: ["ex"],
          right: ["i", "<", "12"],
          original: "ex > i < 12",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["log", "(", "apostle", "[", "i", "]", ")"],
          original: "ex > log ( apostle [ i ] )",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm"],
          original: "is > if ( ex ) sm",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["i", "=", "0"],
          original: "ex > i = 0",
        },
        {
          left: ["ex"],
          right: ["i", "=", "i", "+", "1"],
          original: "ex > i = i + 1",
        },
        {
          left: ["ex"],
          right: ["i", "<", "list", ".", "length"],
          original: "ex > i < list . length",
        },
        {
          left: ["fs"],
          right: ["for", "(", "ex", ";", "ex", ";", "ex", ")", "sm"],
          original: "fs > for ( ex ; ex ; ex ) sm",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["ex"],
          right: ["copy", "[", "i", "]", "=", "list", "[", "i", "]"],
          original: "ex > copy [ i ] = list [ i ]",
        },
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
        {
          left: ["ex"],
          right: ["log", "(", "i", ")"],
          original: "ex > log ( i )",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
      ],
    ],
    "Grow Left Pair Change Right": [
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
    "Shrink Left Pair Replace Right Same": [
      [
        {
          left: ["b", "c"],
          right: ["b", "b"],
          original: "b c > b b",
        },
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
        {
          left: ["b", "c"],
          right: ["b", "b"],
          original: "b c > b b",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
        {
          left: ["b", "c"],
          right: ["b", "b"],
          original: "b c > b b",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
        {
          left: ["b", "c"],
          right: ["b", "b"],
          original: "b c > b b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["b", "b"],
          original: "b c > b b",
        },
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["b", "b"],
          original: "b c > b b",
        },
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
    ],
    "Unary Equations Adding": [
      [
        {
          left: ["1", "1"],
          right: ["1", "+", "1"],
          original: "1 1 > 1 + 1",
        },
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
      [
        {
          left: ["1", "1"],
          right: ["1", "+", "1"],
          original: "1 1 > 1 + 1",
        },
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
      [
        {
          left: ["1", "1"],
          right: ["1", "+", "1"],
          original: "1 1 > 1 + 1",
        },
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
      [
        {
          left: ["1", "1"],
          right: ["1", "+", "1"],
          original: "1 1 > 1 + 1",
        },
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
      [
        {
          left: ["1", "1"],
          right: ["1", "+", "1"],
          original: "1 1 > 1 + 1",
        },
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
      [
        {
          left: ["1", "1"],
          right: ["1", "+", "1"],
          original: "1 1 > 1 + 1",
        },
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
    ],
    "Swap Change Left": [
      [
        {
          left: ["b", "c"],
          right: ["a", "b"],
          original: "b c > a b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a", "b"],
          original: "b c > a b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a", "b"],
          original: "b c > a b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a", "b"],
          original: "b c > a b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a", "b"],
          original: "b c > a b",
        },
      ],
    ],
    "Unary To Binary Equations Preparation": [
      [
        {
          left: ["e", "d"],
          right: ["e", "="],
          original: "e d > e =",
        },
        {
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
      ],
      [
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
        {
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
        {
          left: ["=", "d"],
          right: ["d", "f", "="],
          original: "= d > d f =",
        },
      ],
      [
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
        {
          left: ["e", "d"],
          right: ["e", "="],
          original: "e d > e =",
        },
        {
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
      ],
      [
        {
          left: ["e", "d"],
          right: ["e", "="],
          original: "e d > e =",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
      ],
      [
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["=", "d"],
          right: ["d", "f", "="],
          original: "= d > d f =",
        },
      ],
      [
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["=", "d"],
          right: ["d", "f", "="],
          original: "= d > d f =",
        },
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
      ],
      [
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["=", "d"],
          right: ["d", "f", "="],
          original: "= d > d f =",
        },
        {
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
      ],
      [
        {
          left: ["=", "d"],
          right: ["d", "f", "="],
          original: "= d > d f =",
        },
        {
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
        {
          left: ["e", "d"],
          right: ["e", "="],
          original: "e d > e =",
        },
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
      ],
    ],
    "Binary Counting": [
      [
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
      ],
      [
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
    ],
    "Statements If": [
      [
        {
          left: ["sm"],
          right: ["return", ";"],
          original: "sm > return ;",
        },
        {
          left: ["ex"],
          right: ["y", "===", "null"],
          original: "ex > y === null",
        },
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm"],
          original: "is > if ( ex ) sm",
        },
      ],
      [
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm"],
          original: "is > if ( ex ) sm",
        },
        {
          left: ["ex"],
          right: ["x", "<", "0"],
          original: "ex > x < 0",
        },
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
      ],
      [
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["ex"],
          right: ["x", "=", "1"],
          original: "ex > x = 1",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
      ],
      [
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm"],
          original: "is > if ( ex ) sm",
        },
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
        {
          left: ["ex"],
          right: ["y", ">", "max"],
          original: "ex > y >> max",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["y", "=", "0"],
          original: "ex > y = 0",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["log", "(", '"reset"', ")"],
          original: 'ex > log ( "reset" )',
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
      ],
      [
        {
          left: ["vdg"],
          right: ["vdg", ",", "vd"],
          original: "vdg > vdg , vd",
        },
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm", "else", "sm"],
          original: "is > if ( ex ) sm else sm",
        },
        {
          left: ["ex"],
          right: ["x", ">", "0"],
          original: "ex > x > 0",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["positive", "=", "true"],
          original: "ex > positive = true",
        },
        {
          left: ["ex"],
          right: ["positive", "=", "false"],
          original: "ex > positive = false",
        },
      ],
    ],
    "Statements Variable": [
      [
        {
          left: ["vd"],
          right: ["id"],
          original: "vd > id",
        },
        {
          left: ["id"],
          right: ["i"],
          original: "id > i",
        },
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
        {
          left: ["vk"],
          right: ["let"],
          original: "vk > let",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["0"],
          original: "ex > 0",
        },
        {
          left: ["vk"],
          right: ["let"],
          original: "vk > let",
        },
        {
          left: ["vd"],
          right: ["id", "=", "ex"],
          original: "vd > id = ex",
        },
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
        {
          left: ["id"],
          right: ["j"],
          original: "id > j",
        },
      ],
      [
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["vdg"],
          right: ["vdg", ",", "vd"],
          original: "vdg > vdg , vd",
        },
        {
          left: ["vd"],
          right: ["id"],
          original: "vd > id",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["vk"],
          right: ["var"],
          original: "vk > var",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
      ],
      [
        {
          left: ["vdg"],
          right: ["vdg", ",", "vd"],
          original: "vdg > vdg , vd",
        },
        {
          left: ["vd"],
          right: ["id"],
          original: "vd > id",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
        {
          left: ["id"],
          right: ["a"],
          original: "id > a",
        },
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["vk"],
          right: ["var"],
          original: "vk > var",
        },
      ],
      [
        {
          left: ["id"],
          right: ["c"],
          original: "id > c",
        },
        {
          left: ["vd"],
          right: ["id"],
          original: "vd > id",
        },
        {
          left: ["id"],
          right: ["b"],
          original: "id > b",
        },
      ],
      [
        {
          left: ["vd"],
          right: ["id", "=", "ex"],
          original: "vd > id = ex",
        },
        {
          left: ["vk"],
          right: ["const"],
          original: "vk > const",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
        {
          left: ["vdg"],
          right: ["vdg", ",", "vd"],
          original: "vdg > vdg , vd",
        },
        {
          left: ["ex"],
          right: ["2"],
          original: "ex > 2",
        },
      ],
      [
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["ex"],
          right: ["1"],
          original: "ex > 1",
        },
        {
          left: ["vd"],
          right: ["id", "=", "ex"],
          original: "vd > id = ex",
        },
      ],
    ],
    "Integer Digits": [
      [
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["g"],
          right: ["di"],
          original: "g > di",
        },
        {
          left: ["di"],
          right: ["1"],
          original: "di > 1",
        },
      ],
      [
        {
          left: ["g"],
          right: ["di"],
          original: "g > di",
        },
        {
          left: ["di"],
          right: ["2"],
          original: "di > 2",
        },
        {
          left: ["di"],
          right: ["8"],
          original: "di > 8",
        },
      ],
      [
        {
          left: ["g"],
          right: ["di", "g"],
          original: "g > di g",
        },
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["g"],
          right: ["di"],
          original: "g > di",
        },
      ],
      [
        {
          left: ["g"],
          right: ["di", "g"],
          original: "g > di g",
        },
        {
          left: ["di"],
          right: ["8"],
          original: "di > 8",
        },
        {
          left: ["di"],
          right: ["9"],
          original: "di > 9",
        },
        {
          left: ["g"],
          right: ["di"],
          original: "g > di",
        },
      ],
      [
        {
          left: ["g"],
          right: ["di", "g"],
          original: "g > di g",
        },
        {
          left: ["g"],
          right: ["di"],
          original: "g > di",
        },
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
      ],
      [
        {
          left: ["di"],
          right: ["6"],
          original: "di > 6",
        },
        {
          left: ["di"],
          right: ["7"],
          original: "di > 7",
        },
        {
          left: ["di"],
          right: ["4"],
          original: "di > 4",
        },
      ],
      [
        {
          left: ["di"],
          right: ["5"],
          original: "di > 5",
        },
        {
          left: ["di"],
          right: ["4"],
          original: "di > 4",
        },
        {
          left: ["di"],
          right: ["6"],
          original: "di > 6",
        },
      ],
      [
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
        {
          left: ["g"],
          right: ["di"],
          original: "g > di",
        },
        {
          left: ["g"],
          right: ["di", "g"],
          original: "g > di g",
        },
      ],
      [
        {
          left: ["di"],
          right: ["2"],
          original: "di > 2",
        },
        {
          left: ["di"],
          right: ["1"],
          original: "di > 1",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
      ],
      [
        {
          left: ["di"],
          right: ["4"],
          original: "di > 4",
        },
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
        {
          left: ["di"],
          right: ["9"],
          original: "di > 9",
        },
      ],
    ],
    Integers: [
      [
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["pi"],
          right: ["8"],
          original: "pi > 8",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["pi"],
          right: ["2"],
          original: "pi > 2",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["9"],
          original: "pi > 9",
        },
        {
          left: ["pi"],
          right: ["6"],
          original: "pi > 6",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["5"],
          original: "pi > 5",
        },
        {
          left: ["pi"],
          right: ["6"],
          original: "pi > 6",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["8"],
          original: "pi > 8",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
      ],
    ],
    Decimals: [
      [
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["de"],
          right: ["in", "."],
          original: "de > in .",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["pi"],
          right: ["5"],
          original: "pi > 5",
        },
        {
          left: ["de"],
          right: [".", "ig"],
          original: "de > . ig",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["2"],
          original: "pi > 2",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["de"],
          right: ["in", "."],
          original: "de > in .",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["de"],
          right: ["in", ".", "ig"],
          original: "de > in . ig",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["de"],
          right: ["in", ".", "ig"],
          original: "de > in . ig",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
        {
          left: ["pi"],
          right: ["9"],
          original: "pi > 9",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["5"],
          original: "pi > 5",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["8"],
          original: "pi > 8",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["6"],
          original: "pi > 6",
        },
      ],
    ],
    "Identifiers Simple": [
      [
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
        {
          left: ["id"],
          right: ["idf"],
          original: "id > idf",
        },
        {
          left: ["idf"],
          right: ["_"],
          original: "idf > _",
        },
      ],
      [
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
        {
          left: ["di"],
          right: ["1"],
          original: "di > 1",
        },
      ],
      [
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
        {
          left: ["idf"],
          right: ["t"],
          original: "idf > t",
        },
      ],
      [
        {
          left: ["idg"],
          right: ["ida", "idg"],
          original: "idg > ida idg",
        },
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["u"],
          original: "idf > u",
        },
        {
          left: ["idf"],
          right: ["v"],
          original: "idf > v",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["idf"],
          right: ["l"],
          original: "idf > l",
        },
      ],
      [
        {
          left: ["idg"],
          right: ["ida", "idg"],
          original: "idg > ida idg",
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
        {
          left: ["idf"],
          right: ["v"],
          original: "idf > v",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["A"],
          original: "idf > A",
        },
        {
          left: ["idf"],
          right: ["J"],
          original: "idf > J",
        },
        {
          left: ["idf"],
          right: ["B"],
          original: "idf > B",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["idf"],
          right: ["B"],
          original: "idf > B",
        },
      ],
      [
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["idf"],
          right: ["J"],
          original: "idf > J",
        },
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
        {
          left: ["idf"],
          right: ["h"],
          original: "idf > h",
        },
      ],
    ],
    "Expressions Multiplicative": [
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mue"],
          right: ["mue", "mo", "ue"],
          original: "mue > mue mo ue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["mo"],
          right: ["/"],
          original: "mo > /",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["mo"],
          right: ["*"],
          original: "mo > *",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["ce"],
          right: ["ce", "(", "ag", ")"],
          original: "ce > ce ( ag )",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mue"],
          right: ["mue", "mo", "ue"],
          original: "mue > mue mo ue",
        },
        {
          left: ["ex"],
          right: ["mue"],
          original: "ex > mue",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mue"],
          right: ["mue", "mo", "ue"],
          original: "mue > mue mo ue",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["mo"],
          right: ["*"],
          original: "mo > *",
        },
        {
          left: ["mo"],
          right: ["/"],
          original: "mo > /",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
    ],
    "Expressions Unary": [
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ue"],
          right: ["uo", "ue"],
          original: "ue > uo ue",
        },
      ],
      [
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["uo"],
          right: ["!"],
          original: "uo > !",
        },
      ],
      [
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["uo"],
          right: ["+"],
          original: "uo > +",
        },
      ],
      [
        {
          left: ["uo"],
          right: ["typeof"],
          original: "uo > typeof",
        },
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
          original: "ce > ce ( )",
        },
        {
          left: ["li"],
          right: ["null"],
          original: "li > null",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
        },
        {
          left: ["ue"],
          right: ["uo", "ue"],
          original: "ue > uo ue",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ex"],
          right: ["ue"],
          original: "ex > ue",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["uo", "ue"],
          original: "ue > uo ue",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
    ],
    "Expressions Primary": [
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
      ],
      [
        {
          left: ["li"],
          right: ["st"],
          original: "li > st",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
      ],
      [
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["st"],
          right: ['"', "luv", '"'],
          original: 'st > " luv "',
        },
        {
          left: ["li"],
          right: ["st"],
          original: "li > st",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["li"],
          right: ["null"],
          original: "li > null",
        },
      ],
      [
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
      ],
      [
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
      ],
      [
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
      ],
    ],
    "Expressions Logical": [
      [
        {
          left: ["le"],
          right: ["le", "lo", "ee"],
          original: "le > le lo ee",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["lo"],
          right: ["&&"],
          original: "lo > &&",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["li"],
          right: ["null"],
          original: "li > null",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["lo"],
          right: ["&&"],
          original: "lo > &&",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["lo"],
          right: ["||"],
          original: "lo > ||",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["le"],
          original: "ex > le",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["lo"],
          right: ["&&"],
          original: "lo > &&",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
      ],
      [
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["le"],
          right: ["le", "lo", "ee"],
          original: "le > le lo ee",
        },
        {
          left: ["lo"],
          right: ["||"],
          original: "lo > ||",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["st"],
          right: ['"', "luv", '"'],
          original: 'st > " luv "',
        },
      ],
      [
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
      ],
    ],
    "Function Declarations": [
      [
        {
          left: ["fd"],
          right: ["function", "id", "(", "fdm", "bs"],
          original: "fd > function id ( fdm bs",
        },
        {
          left: ["bs"],
          right: ["{", "}"],
          original: "bs > { }",
        },
        {
          left: ["id"],
          right: ["empty"],
          original: "id > empty",
        },
        {
          left: ["fdm"],
          right: [")"],
          original: "fdm > )",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["true"],
          original: "ex > true",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["id"],
          right: ["tautology"],
          original: "id > tautology",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
        {
          left: ["fdm"],
          right: [")"],
          original: "fdm > )",
        },
        {
          left: ["fd"],
          right: ["function", "id", "(", "fdm", "bs"],
          original: "fd > function id ( fdm bs",
        },
      ],
      [
        {
          left: ["fd"],
          right: ["function", "id", "(", "fdm", "bs"],
          original: "fd > function id ( fdm bs",
        },
        {
          left: ["fpg"],
          right: ["id"],
          original: "fpg > id",
        },
        {
          left: ["fdm"],
          right: ["fpg", ")"],
          original: "fdm > fpg )",
        },
      ],
      [
        {
          left: ["id"],
          right: ["identity"],
          original: "id > identity",
        },
        {
          left: ["ex"],
          right: ["i"],
          original: "ex > i",
        },
        {
          left: ["id"],
          right: ["i"],
          original: "id > i",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["f", "(", ")"],
          original: "ex > f ( )",
        },
        {
          left: ["id"],
          right: ["f"],
          original: "id > f",
        },
        {
          left: ["id"],
          right: ["invoke"],
          original: "id > invoke",
        },
      ],
      [
        {
          left: ["fdm"],
          right: ["fpg", ")"],
          original: "fdm > fpg )",
        },
        {
          left: ["fd"],
          right: ["function", "id", "(", "fdm", "bs"],
          original: "fd > function id ( fdm bs",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
      ],
      [
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["fpg"],
          right: ["id"],
          original: "fpg > id",
        },
        {
          left: ["fpg"],
          right: ["fpg", ",", "id"],
          original: "fpg > fpg , id",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["x", "+", "y"],
          original: "ex > x + y",
        },
        {
          left: ["id"],
          right: ["add"],
          original: "id > add",
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
      ],
      [
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["sm"],
          right: ["vs"],
          original: "sm > vs",
        },
      ],
      [
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["vd"],
          right: ["id", "=", "ex"],
          original: "vd > id = ex",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
        {
          left: ["vk"],
          right: ["let"],
          original: "vk > let",
        },
      ],
      [
        {
          left: ["id"],
          right: ["average"],
          original: "id > average",
        },
        {
          left: ["id"],
          right: ["sum"],
          original: "id > sum",
        },
        {
          left: ["ex"],
          right: ["add", "(", "x", ",", "y", ")"],
          original: "ex > add ( x , y )",
        },
        {
          left: ["ex"],
          right: ["sum", "/", "2"],
          original: "ex > sum / 2",
        },
      ],
    ],
    "Expressions Member And Access": [
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["id"],
          right: ["prop"],
          original: "id > prop",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["ex"],
          right: ["mae"],
          original: "ex > mae",
        },
      ],
      [
        {
          left: ["id"],
          right: ["last"],
          original: "id > last",
        },
        {
          left: ["id"],
          right: ["name"],
          original: "id > name",
        },
        {
          left: ["id"],
          right: ["human"],
          original: "id > human",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
      ],
      [
        {
          left: ["id"],
          right: ["human"],
          original: "id > human",
        },
        {
          left: ["id"],
          right: ["birthdate"],
          original: "id > birthdate",
        },
        {
          left: ["id"],
          right: ["year"],
          original: "id > year",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["ex"],
          right: ["mae"],
          original: "ex > mae",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["li"],
          right: ["st"],
          original: "li > st",
        },
        {
          left: ["st"],
          right: ['"', "luv", '"'],
          original: 'st > " luv "',
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["ex"],
          right: ["mae"],
          original: "ex > mae",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["mae"],
          original: "ex > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
    ],
    "Strings Simple": [
      [
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["_"],
          original: "idf > _",
        },
        {
          left: ["idf"],
          right: ["B"],
          original: "idf > B",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
      ],
      [
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
        {
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
        {
          left: ["stg"],
          right: ["ida", "stg"],
          original: "stg > ida stg",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["di"],
          right: ["1"],
          original: "di > 1",
        },
      ],
      [
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
        {
          left: ["idf"],
          right: ["t"],
          original: "idf > t",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["idf"],
          right: ["u"],
          original: "idf > u",
        },
        {
          left: ["idf"],
          right: ["l"],
          original: "idf > l",
        },
        {
          left: ["idf"],
          right: ["v"],
          original: "idf > v",
        },
      ],
      [
        {
          left: ["stg"],
          right: ["ida", "stg"],
          original: "stg > ida stg",
        },
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
        {
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
      ],
      [
        {
          left: ["stg"],
          right: ["ida", "stg"],
          original: "stg > ida stg",
        },
        {
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
      ],
      [
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["idf"],
          right: ["B"],
          original: "idf > B",
        },
        {
          left: ["idf"],
          right: ["A"],
          original: "idf > A",
        },
      ],
      [
        {
          left: ["stg"],
          right: ["ida", "stg"],
          original: "stg > ida stg",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
        {
          left: ["idf"],
          right: ["h"],
          original: "idf > h",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["idf"],
          right: ["J"],
          original: "idf > J",
        },
      ],
    ],
    "Scientific Notation Numbers": [
      [
        {
          left: ["ex"],
          right: ["ig"],
          original: "ex > ig",
        },
        {
          left: ["eE"],
          right: ["e"],
          original: "eE > e",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["de"],
          right: ["in", "."],
          original: "de > in .",
        },
        {
          left: ["sn"],
          right: ["de", "se"],
          original: "sn > de se",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
      ],
      [
        {
          left: ["de"],
          right: ["in", "."],
          original: "de > in .",
        },
        {
          left: ["eE"],
          right: ["E"],
          original: "eE > E",
        },
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["ex"],
          right: ["+", "ig"],
          original: "ex > + ig",
        },
        {
          left: ["sn"],
          right: ["de", "se"],
          original: "sn > de se",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["2"],
          original: "pi > 2",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["9"],
          original: "pi > 9",
        },
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
      [
        {
          left: ["de"],
          right: [".", "ig"],
          original: "de > . ig",
        },
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["ex"],
          right: ["-", "ig"],
          original: "ex > - ig",
        },
        {
          left: ["sn"],
          right: ["de", "se"],
          original: "sn > de se",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["eE"],
          right: ["e"],
          original: "eE > e",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["8"],
          original: "pi > 8",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["pi"],
          right: ["5"],
          original: "pi > 5",
        },
      ],
      [
        {
          left: ["eE"],
          right: ["E"],
          original: "eE > E",
        },
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["sn"],
          right: ["de", "se"],
          original: "sn > de se",
        },
        {
          left: ["de"],
          right: ["in", ".", "ig"],
          original: "de > in . ig",
        },
        {
          left: ["ex"],
          right: ["ig"],
          original: "ex > ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
      ],
      [
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
      ],
      [
        {
          left: ["eE"],
          right: ["e"],
          original: "eE > e",
        },
        {
          left: ["ex"],
          right: ["ig"],
          original: "ex > ig",
        },
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["sn"],
          right: ["ig", "se"],
          original: "sn > ig se",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["ex"],
          right: ["+", "ig"],
          original: "ex > + ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["de"],
          right: [".", "ig"],
          original: "de > . ig",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
        {
          left: ["pi"],
          right: ["6"],
          original: "pi > 6",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
    ],
    "Expressions Function Calls": [
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
          original: "ce > ce ( )",
        },
        {
          left: ["id"],
          right: ["fn"],
          original: "id > fn",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
          original: "ce > ce ( )",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["id"],
          right: ["refresh"],
          original: "id > refresh",
        },
        {
          left: ["id"],
          right: ["page"],
          original: "id > page",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["ce", "(", "ag", ")"],
          original: "ce > ce ( ag )",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ag"],
          right: ["ex"],
          original: "ag > ex",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["id"],
          right: ["refresh"],
          original: "id > refresh",
        },
      ],
      [
        {
          left: ["ag"],
          right: ["ex", ",", "ag"],
          original: "ag > ex , ag",
        },
        {
          left: ["ag"],
          right: ["ex"],
          original: "ag > ex",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["id"],
          right: ["add"],
          original: "id > add",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["id"],
          right: ["door"],
          original: "id > door",
        },
        {
          left: ["id"],
          right: ["building"],
          original: "id > building",
        },
        {
          left: ["id"],
          right: ["knock"],
          original: "id > knock",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["in"],
          right: ["0"],
          original: "in > 0",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["id"],
          right: ["double"],
          original: "id > double",
        },
        {
          left: ["id"],
          right: ["list"],
          original: "id > list",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
          original: "ce > ce ( )",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
      ],
      [
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["id"],
          right: ["all"],
          original: "id > all",
        },
        {
          left: ["id"],
          right: ["love"],
          original: "id > love",
        },
      ],
    ],
    "Expressions Assignment": [
      [
        {
          left: ["ase"],
          right: ["lh", "=", "ase"],
          original: "ase > lh = ase",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["lh"],
          right: ["id"],
          original: "lh > id",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
      ],
      [
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["lh"],
          right: ["mle"],
          original: "lh > mle",
        },
        {
          left: ["ase"],
          right: ["lh", "=", "ase"],
          original: "ase > lh = ase",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["ex"],
          right: ["ase"],
          original: "ex > ase",
        },
      ],
      [
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["in"],
          right: ["0"],
          original: "in > 0",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["st"],
          right: ['"', "luv", '"'],
          original: 'st > " luv "',
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["uo"],
          right: ["typeof"],
          original: "uo > typeof",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["in"],
          right: ["0"],
          original: "in > 0",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["id"],
          right: ["z"],
          original: "id > z",
        },
      ],
      [
        {
          left: ["lh"],
          right: ["id"],
          original: "lh > id",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["ase"],
          right: ["lh", "=", "ase"],
          original: "ase > lh = ase",
        },
      ],
      [
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
      ],
      [
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["le"],
          right: ["le", "lo", "ee"],
          original: "le > le lo ee",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["in"],
          right: ["0"],
          original: "in > 0",
        },
      ],
    ],
    "Expressions Equality": [
      [
        {
          left: ["ee"],
          right: ["ee", "===", "re"],
          original: "ee > ee === re",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["id"],
          right: ["all"],
          original: "id > all",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ee"],
          original: "ex > ee",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["id"],
          right: ["refresh"],
          original: "id > refresh",
        },
      ],
      [
        {
          left: ["uo"],
          right: ["typeof"],
          original: "uo > typeof",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["ex"],
          right: ["ee"],
          original: "ex > ee",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["li"],
          right: ["st"],
          original: "li > st",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["li"],
          right: ["null"],
          original: "li > null",
        },
        {
          left: ["ag"],
          right: ["ex", ",", "ag"],
          original: "ag > ex , ag",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["ro"],
          right: ["<"],
          original: "ro > <",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["ee"],
          right: ["ee", "===", "re"],
          original: "ee > ee === re",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
      ],
    ],
    "Expressions Additive": [
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ade"],
          original: "ex > ade",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["mue"],
          right: ["mue", "mo", "ue"],
          original: "mue > mue mo ue",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["mo"],
          right: ["/"],
          original: "mo > /",
        },
        {
          left: ["id"],
          right: ["building"],
          original: "id > building",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ade"],
          original: "ex > ade",
        },
        {
          left: ["ag"],
          right: ["ex"],
          original: "ag > ex",
        },
        {
          left: ["ce"],
          right: ["ce", "(", "ag", ")"],
          original: "ce > ce ( ag )",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
        {
          left: ["id"],
          right: ["all"],
          original: "id > all",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ex"],
          right: ["ade"],
          original: "ex > ade",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["id"],
          right: ["knock"],
          original: "id > knock",
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["id"],
          right: ["double"],
          original: "id > double",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
      ],
    ],
    "Expressions Relational": [
      [
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
          original: "re > re ro ade",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ro"],
          right: ["<"],
          original: "ro > <",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mo"],
          right: ["*"],
          original: "mo > *",
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
        {
          left: ["ro"],
          right: [">"],
          original: "ro > >>",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
          original: "re > re ro ade",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
      ],
      [
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
      ],
      [
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["ex"],
          right: ["re"],
          original: "ex > re",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
      [
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["li"],
          right: ["null"],
          original: "li > null",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
        },
      ],
      [
        {
          left: ["st"],
          right: ['"', "luv", '"'],
          original: 'st > " luv "',
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
    ],
    "Unary To Binary Equations": [
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
      ],
      [
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
      ],
      [
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
      ],
      [
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
      ],
      [
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
    ],
  };
  return r;
}
