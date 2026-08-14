export function app_replace_rule_set_binary_counting_prepare_2() {
  let r = {
    name: "Binary Counting Prepare 2",
    rules: ["0 a > 1", "1 a > a 0", "1 > 1 1"],
    goals: [
      {
        start: "0   1   a",
        end: "1   0",
      },
      {
        start: "0   1   a",
        end: "1   0   0",
      },
      {
        start: "0   1   a",
        end: "1   0   0   0   0",
      },
    ],
    why: "A new rule stops the marker: when the 'a' reaches a '0', that '0' becomes a '1' and the marker is used up. Sliding was the travelling; this is the landing.",
  };
  return r;
}
