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
    why: "The rules demonstrate binary incrementation, where applying 'a' to a binary number (represented by 0s and 1s) simulates adding one, including carrying over, as shown by the transformation of the start to end sequences in the goals.",
  };
  return r;
}
