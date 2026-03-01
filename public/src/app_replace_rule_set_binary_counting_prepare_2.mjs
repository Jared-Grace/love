export function app_replace_rule_set_binary_counting_prepare_2() {
  let r = {
    name: "Binary Counting Prepare 2",
    rules: ["0 a > 1", "1 a > a 0", "1 > 1 1"],
    goals: [
      {
        start: "01a",
        end: "10",
      },
      {
        start: "01aa",
        end: "100",
      },
      {
        start: "01aaaa",
        end: "10000",
      },
    ],
  };
  return r;
}
