export function app_replace_rule_set_binary_counting_prepare_1() {
  let r = {
    name: "Binary Counting Prepare 1",
    rules: ["1 a > a 0", "1 > 1 1"],
    goals: [
      {
        start: "1 a",
        end: "1 a 0",
      },
      {
        start: "1 a",
        end: "a 0 0 0",
      },
    ],
    why: "The rules demonstrate binary counting by simulating the process of incrementing a binary number, where '1' acts as a carry and 'a' as a digit, showing how binary addition propagates carries and extends the number.",
    rules_used: [
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
  };
  return r;
}
