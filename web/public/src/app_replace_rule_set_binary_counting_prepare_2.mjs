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
    why: "These replacement rules demonstrate a grammar for incrementing binary numbers using a symbol 'a' as an increment operator. The rules show how to add one to a binary number, handling carries appropriately, and the goals illustrate the process of incrementing the binary number represented by the start sequence to reach the desired end sequence.",
  };
  return r;
}
