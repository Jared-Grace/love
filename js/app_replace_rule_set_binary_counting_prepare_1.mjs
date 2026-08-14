export function app_replace_rule_set_binary_counting_prepare_1() {
  let r = {
    name: "Binary Counting Prepare 1",
    rules: ["1 a > a 0", "1 > 1 1"],
    goals: [
      {
        start: "1   a",
        end: "1   1   a",
      },
      {
        start: "1   a",
        end: "1   a   0",
      },
      {
        start: "1   a",
        end: "1   1   a   0",
      },
      {
        start: "1   a",
        end: "a   0   0",
      },
      {
        start: "1   a",
        end: "a   0   0   0",
      },
    ],
    why: "The slide from the last exercise, plus a rule that turns one '1' into two. Now you can build a row of '1's first and then send the marker through it.",
  };
  return r;
}
