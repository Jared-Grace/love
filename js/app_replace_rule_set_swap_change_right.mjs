export function app_replace_rule_set_swap_change_right() {
  let r = {
    name: "Swap Change Right",
    rules: ["a b > b c"],
    goals: [
      {
        start: "a   a   b",
        end: "b   c   c",
      },
      {
        start: "a   b   a   b   a   b",
        end: "a   b   a   b   b   c",
      },
      {
        start: "a   b   a   b   a   b   a   b",
        end: "b   c   b   c   a   b   b   c",
      },
      {
        start: "a   a   a   a   b",
        end: "b   c   c   c   c",
      },
      {
        start: "a   b   a   b   a   b   a   b   a   b   a   b",
        end: "a   b   b   c   a   b   b   c   b   c   b   c",
      },
    ],
    why: "The pair 'a' 'b' becomes 'b' 'c': the 'a' is gone, the 'b' has slid left, and a new 'c' has appeared on the right.",
  };
  return r;
}
