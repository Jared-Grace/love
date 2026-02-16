export function app_replace_rule_sets() {
  let v = [
    {
      name: "Grow Different",
      rules: ["a > b c"],
      goals: [
        {
          start: "a",
          end: "bc",
        },
        {
          start: "aa",
          end: "bcbc",
        },
        {
          start: "aaaa",
          end: "bcbcbcbc",
        },
      ],
    },
    {
      name: "Shrink Different",
      rules: ["b c > a"],
      goals: [
        {
          start: "bc",
          end: "a",
        },
        {
          start: "bcbc",
          end: "aa",
        },
        {
          start: "bcbcbcbc",
          end: "aaaa",
        },
      ],
    },
    {
      name: "Double",
      rules: ["a > a a"],
      goals: [
        {
          start: "a",
          end: "aa",
        },
        {
          start: "a",
          end: "aaa",
        },
        {
          start: "a",
          end: "aaaaa",
        },
      ],
    },
    {
      name: "Half",
      rules: ["a a > a"],
      goals: [
        {
          start: "aa",
          end: "a",
        },
        {
          start: "aaa",
          end: "a",
        },
        {
          start: "aaaaa",
          end: "a",
        },
      ],
    },
    {
      name: "Grow right",
      rules: ["a > a b"],
      goals: [
        {
          start: "a",
          end: "abb",
        },
        {
          start: "aa",
          end: "abbabbb",
        },
        {
          start: "aaa",
          end: "ababbabbb",
        },
      ],
    },
    {
      name: "Grow left",
      rules: ["a > b a"],
      goals: [
        {
          start: "a",
          end: "bba",
        },
        {
          start: "aa",
          end: "bbbabba",
        },
        {
          start: "aaa",
          end: "bbbabbaba",
        },
      ],
    },
    {
      name: "Shrink right",
      rules: ["a b > a"],
      goals: [
        {
          start: "abb",
          end: "a",
        },
        {
          start: "abbabbb",
          end: "aa",
        },
        {
          start: "ababbabbb",
          end: "aaa",
        },
      ],
    },
    {
      name: "Shrink left",
      rules: ["b a > a"],
      goals: [
        {
          start: "bba",
          end: "a",
        },
        {
          start: "bbbabba",
          end: "aa",
        },
        {
          start: "bbbabbaba",
          end: "aaa",
        },
      ],
    },
    {
      name: "Swap",
      rules: ["a b > b a"],
      goals: [
        {
          start: "abb",
          end: "bba",
        },
        {
          start: "abbbb",
          end: "bbbba",
        },
        {
          start: "abbabb",
          end: "bbbbaa",
        },
      ],
    },
    {
      name: "Unary Equations",
      rules: ["= > 1 = 1"],
      goals: [
        {
          start: "1=1",
          end: "11=11",
        },
        {
          start: "1=1",
          end: "111=111",
        },
        {
          start: "1=1",
          end: "11111=11111",
        },
      ],
    },
    {
      name: "Grow Different 2",
      rules: ["a > b c", "b > d e"],
      goals: [
        {
          start: "a",
          end: "dec",
        },
        {
          start: "aa",
          end: "decdec",
        },
        {
          start: "aaaa",
          end: "decbcbcdec",
        },
      ],
    },
    {
      name: "Shrink Different 2",
      rules: ["b c > a", "d e > b"],
      goals: [
        {
          start: "dec",
          end: "a",
        },
        {
          start: "decdec",
          end: "aa",
        },
        {
          start: "decbcbcdec",
          end: "aaaa",
        },
      ],
    },
    {
      name: "Same Replace Right",
      rules: ["a a > a b"],
      goals: [
        {
          start: "aaaa",
          end: "aaba",
        },
        {
          start: "aaaa",
          end: "abab",
        },
        {
          start: "aaaaaaaa",
          end: "abaabaab",
        },
      ],
    },
    {
      name: "Same Replace Left",
      rules: ["a a > b a"],
      goals: [
        {
          start: "aaaa",
          end: "abaa",
        },
        {
          start: "aaaa",
          end: "baba",
        },
        {
          start: "aaaaaaaa",
          end: "baabaaba",
        },
      ],
    },
    {
      name: "Replace Right Same",
      rules: ["a b > a a"],
      goals: [
        {
          start: "ababab",
          end: "abaaab",
        },
        {
          start: "abab",
          end: "aaaa",
        },
        {
          start: "abaabaab",
          end: "aaaaaaaa",
        },
      ],
    },
    {
      name: "Replace Left Same",
      rules: ["b a > a a"],
      goals: [
        {
          start: "bababa",
          end: "baaaba",
        },
        {
          start: "baba",
          end: "aaaa",
        },
        {
          start: "baabaaba",
          end: "aaaaaaaa",
        },
      ],
    },
    {
      name: "Right Change",
      rules: ["a b > a c"],
      goals: [
        {
          start: "ababab",
          end: "ababac",
        },
        {
          start: "ababab",
          end: "acabac",
        },
        {
          start: "abaabaaabaaaab",
          end: "acaacaaacaaaac",
        },
      ],
    },
    {
      name: "Swap Change Right",
      rules: ["a b > b c"],
      goals: [
        {
          start: "ababab",
          end: "ababbc",
        },
        {
          start: "abababab",
          end: "bcbcabbc",
        },
        {
          start: "abababababab",
          end: "abbcabbcbcbc",
        },
      ],
    },
    {
      name: "Swap Change Left",
      rules: ["b c > a b"],
      goals: [
        {
          start: "ababbc",
          end: "ababab",
        },
        {
          start: "bcbcabbc",
          end: "abababab",
        },
        {
          start: "abbcabbcbcbc",
          end: "abababababab",
        },
      ],
    },
    {
      name: "Grow Between",
      rules: ["a a > a b a"],
      goals: [
        {
          start: "aaa",
          end: "aaaba",
        },
        {
          start: "aaaa",
          end: "abaaaba",
        },
        {
          start: "aaaaaa",
          end: "abaabaaba",
        },
      ],
    },
    {
      name: "Shrink Between",
      rules: ["a b a > a a"],
      goals: [
        {
          start: "aaaba",
          end: "aaa",
        },
        {
          start: "abaaaba",
          end: "aaaa",
        },
        {
          start: "abaabaaba",
          end: "aaaaaa",
        },
      ],
    },
    {
      name: "Unary Equations Adding",
      rules: ["= > 1 = 1", "1 1 > 1 + 1"],
      goals: [
        {
          start: "1=1",
          end: "11=11",
        },
        {
          start: "1=1",
          end: "11=1+1",
        },
        {
          start: "1=1",
          end: "1+1=11",
        },
        {
          start: "1=1",
          end: "1+11=111",
        },
        {
          start: "1=1",
          end: "1+11=11+1",
        },
        {
          start: "1=1",
          end: "1+1+111=11111",
        },
      ],
    },
    {
      name: "Binary Counting",
      rules: ["0 a > 1", "1 a > a 0", "c > a c", "b a > b 1"],
      goals: [
        {
          start: "b0c",
          end: "b0ac",
        },
        {
          start: "b0c",
          end: "b1c",
        },
        {
          start: "b0c",
          end: "b10c",
        },
        {
          start: "b0c",
          end: "b11c",
        },
        {
          start: "b0c",
          end: "b101c",
        },
        {
          start: "b0c",
          end: "b111c",
        },
        {
          start: "b0c",
          end: "b1010c",
        },
      ],
    },
    {
      name: "Unary to Binary Equations",
      rules: [
        "e = b > c e = b c",
        "c c > c + b c",
        "d b > b d",
        "d c > a d",
        "d e = > = d",
        "d + > + d",
        "0 a > 1",
        "1 a > a 0",
        "b a > b 1",
      ],
      goals: [
        {
          start: "dbce=bc",
          end: "bdce=bc",
        },
        {
          start: "dbce=bc",
          end: "bade=bc",
        },
        {
          start: "dbce=bc",
          end: "b1de=bc",
        },
        {
          start: "dbce=bc",
          end: "b1=dbc",
        },
        {
          start: "dbce=bc",
          end: "b1=bdc",
        },
        {
          start: "dbce=bc",
          end: "b1=bad",
        },
        {
          start: "dbce=bc",
          end: "b1=b1d",
        },
      ],
    },
  ];
  return v;
}
