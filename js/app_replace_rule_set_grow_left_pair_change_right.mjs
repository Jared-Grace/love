export function app_replace_rule_set_grow_left_pair_change_right() {
  let r = {
    name: "Grow Left Pair Change Right",
    rules: ["a > b a", "b b > b c"],
    goals: [
      {
        start: "a   a",
        end: "b   a   b   a",
      },
      {
        start: "a",
        end: "b   b   a",
      },
      {
        start: "b   b   a",
        end: "b   c   a",
      },
      {
        start: "a",
        end: "b   b   b   a",
      },
      {
        start: "a",
        end: "b   c   b   c   a",
      },
      {
        start: "a   a",
        end: "b   c   b   a   b   c   b   a",
      },
    ],
    why: "An 'a' keeps dropping 'b's to its left. As soon as two 'b's end up side by side, the right one of the pair can turn into a 'c'.",
  };
  return r;
}
