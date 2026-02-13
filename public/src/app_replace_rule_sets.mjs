export function app_replace_rule_sets() {
  let v = [
    {
      name: "Grow",
      rules: ["a > a a"],
      goals: [
        {
          start: "a",
          end: "",
        },
      ],
    },
    {
      name: "Shrink",
      rules: ["a a > a"],
      start: "",
      goals: [
        {
          start: "aaaaa",
          end: "",
        },
      ],
    },
    {
      name: "Unary Equations",
      rules: ["= > 1 = 1"],
      start: "",
      goals: [
        {
          start: "1=1",
          end: "",
        },
      ],
    },
    {
      name: "Unary Equations Adding",
      rules: ["= > 1 = 1", "1 1 > 1 + 1"],
      start: "",
      goals: [
        {
          start: "1=1",
          end: "",
        },
      ],
    },
    {
      name: "Binary Counting",
      rules: ["0 a > 1", "1 a > a 0", "c > a c", "b a > b 1"],
      start: "",
      goals: [
        {
          start: "b0c",
          end: "",
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
      start: "",
      goals: [
        {
          start: "dbce=bc",
          end: "",
        },
      ],
    },
  ];
  return v;
}
