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
      start: "aaaaa",
      goals: [
        {
          start: "",
          end: "",
        },
      ],
    },
    {
      name: "Unary Equations",
      rules: ["= > 1 = 1"],
      start: "1=1",
      goals: [
        {
          start: "",
          end: "",
        },
      ],
    },
    {
      name: "Unary Equations Adding",
      rules: ["= > 1 = 1", "1 1 > 1 + 1"],
      start: "1=1",
      goals: [
        {
          start: "",
          end: "",
        },
      ],
    },
    {
      name: "Binary Counting",
      rules: ["0 a > 1", "1 a > a 0", "c > a c", "b a > b 1"],
      start: "b0c",
      goals: [
        {
          start: "",
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
      start: "dbce=bc",
      goals: [
        {
          start: "",
          end: "",
        },
      ],
    },
  ];
  return v;
}
