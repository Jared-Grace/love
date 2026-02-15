export function app_replace_rule_sets() {
  let v = [
    {
      name: "Grow",
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
      name: "Shrink",
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
      name: "Swap",
      rules: ["a b > b a"],
      goals: [
        {
          start: "abb",
          end: "bba",
        },
        {
          start: "abab",
          end: "baba",
        },
        {
          start: "abbbb",
          end: "bbbba",
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
