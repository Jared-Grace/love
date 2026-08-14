export function app_replace_rule_set_shrink_left() {
  let r = {
    name: "Shrink Left",
    rules: ["b a > a"],
    goals: [
      {
        start: "b   b   a",
        end: "a",
      },
      {
        start: "b   a   b   b   a",
        end: "a   a",
      },
      {
        start: "b   b   b   a   b   b   a",
        end: "a   a",
      },
      {
        start: "b   b   b   a   b   b   a   b   a",
        end: "a   a   a",
      },
    ],
    why: "Now it is the 'b' just before an 'a' that disappears. Same idea as the last one, other side.",
  };
  return r;
}
