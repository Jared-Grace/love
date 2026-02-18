export function app_replace_rule_set_binary_counting_prepare_1() {
  return {
    name: "Binary Counting Prepare 1",
    rules: ["1 a > a 0", "1 > 1 1"],
    goals: [
      {
        start: "1a",
        end: "1a0",
      },
      {
        start: "1a",
        end: "a000",
      },
    ],
  };
}
