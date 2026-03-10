export function app_replace_rule_set_binary_counting_prepare_2() {
  let r = {
    name: "Binary Counting Prepare 2",
    rules: ["0 a > 1", "1 a > a 0", "1 > 1 1"],
    goals: [
      {
        start: "0 1 a",
        end: "1 0",
      },
      {
        start: "0 1 a",
        end: "1 0 0",
      },
      {
        start: "0 1 a",
        end: "1 0 0 0 0",
      },
    ],
  };
  return r;
}
