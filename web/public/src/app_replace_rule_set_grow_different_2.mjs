export function app_replace_rule_set_grow_different_2() {
  let r = {
    name: "Grow Different 2",
    rules: ["a > b c", "b > d e"],
    goals: [
      {
        start: "a",
        end: "d e c",
      },
      {
        start: "a a",
        end: "d e c d e c",
      },
      {
        start: "a a a a",
        end: "d e c b c b c d e c",
      },
    ],
  };
  return r;
}
