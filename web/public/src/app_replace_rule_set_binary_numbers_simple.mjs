export function app_replace_rule_set_binary_numbers_simple() {
  let r = {
    name: "Binary numbers",
    rules: ["a > a b", "a > b", "b > 0", "b > 1"],
    goals: [
      {
        start: "a",
        end: "0",
      },
      {
        start: "a",
        end: "1",
      },
      {
        start: "a",
        end: "10",
      },
      {
        start: "a",
        end: "11",
      },
      {
        start: "a",
        end: "101",
      },
      {
        start: "a",
        end: "1010",
      },
    ],
  };
  return r;
}
