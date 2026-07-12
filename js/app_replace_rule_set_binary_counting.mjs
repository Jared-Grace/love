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
    why: "The replacement rules demonstrate binary counting by simulating the process of incrementing a binary number, where 'a' acts as an increment operator and the rules handle binary addition and carry propagation.",
  };
  return r;
}
