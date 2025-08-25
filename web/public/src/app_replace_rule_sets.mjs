export function app_replace_rule_sets() {
  let v = [
    {
      name: "Grow",
      rules: ["a > a a"],
      start: "a",
    },
    {
      name: "Shrink",
      rules: ["a a > a"],
      start: "aaaaa",
    },
    {
      name: "Unary Equations",
      rules: ["= > 1 = 1"],
      start: "1=1",
    },
    {
      name: "Unary Equations Adding",
      rules: ["= > 1 = 1", "1 1 > 1 + 1"],
      start: "1=1",
    },
    {
      name: "Binary Counting",
      rules: ["0 a > 1", "1 a > a 0", "c > a c", "b a > b 1"],
      start: "b0c",
    },
    {
      name: "Binary Counting",
      rules: ["0 a > 1", "1 a > a 0", "c > a c", "b a > b 1"],
      start: "b111c",
    },
  ];
  return v;
}
