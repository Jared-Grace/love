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
  };
  return r;
}
