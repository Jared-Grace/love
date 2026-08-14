export function app_replace_rule_set_right_change() {
  let r = {
    name: "Right Change",
    rules: ["a b > a c"],
    goals: [
      {
        start: "a   b   a   b   a   b",
        end: "a   b   a   b   a   c",
      },
      {
        start: "a   b   a   b   a   b",
        end: "a   c   a   b   a   c",
      },
      {
        start: "a   b   a   a   b   a   a   a   b   a   a   a   a   b",
        end: "a   c   a   a   c   a   a   a   c   a   a   a   a   c",
      },
    ],
    why: "A b turns into a c only when there is an a on its left. What a symbol may become can depend on its neighbour.",
  };
  return r;
}
