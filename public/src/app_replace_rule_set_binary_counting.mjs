export function app_replace_rule_set_binary_counting() {
  let r = {
    name: "Binary Counting",
    rules: ["0 a > 1", "1 a > a 0", "c > a c", "b a > b 1"],
    goals: [
      {
        start: "b 0 c",
        end: "b 0 a c",
      },
      {
        start: "b 0 c",
        end: "b 1 c",
      },
      {
        start: "b 0 c",
        end: "b 1 0 c",
      },
      {
        start: "b 0 c",
        end: "b 1 1 c",
      },
      {
        start: "b 1 0 c",
        end: "b 1 0 1 c",
      },
      {
        start: "b 1 0 0 c",
        end: "b 1 1 1 c",
      },
      {
        start: "b 1 0 0 0 c",
        end: "b 1 0 1 0 c",
      },
    ],
    why: "These replacement rules demonstrate the process of incrementing a binary number by one, simulating binary counting. The rules manipulate sequences of symbols to represent the carry and increment operations typical in binary addition, with 'a' acting as a marker for increment, and the transformations showing how each bit is updated accordingly.",
  };
  return r;
}
