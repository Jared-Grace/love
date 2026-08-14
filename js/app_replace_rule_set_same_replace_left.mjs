export function app_replace_rule_set_same_replace_left() {
  let r = {
    name: "Same Replace Left",
    rules: ["a a > b a"],
    goals: [
      {
        start: "a   a   a   a",
        end: "a   b   a   a",
      },
      {
        start: "a   a   a   a",
        end: "b   a   b   a",
      },
      {
        start: "a   a   a   a   a   a   a   a",
        end: "b   a   a   b   a   a   b   a",
      },
    ],
    why: "Two 'a's side by side again, but this time the left one turns into a 'b'.",
  };
  return r;
}
