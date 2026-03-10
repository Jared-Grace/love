export function app_replace_rule_set_shrink_different_2() {
  let r = {
    name: "Shrink Different 2",
    rules: ["b c > a", "d e > b"],
    goals: [
      {
        start: "d e c",
        end: "a",
      },
      {
        start: "d e c d e c",
        end: "a a",
      },
      {
        start: "d e c b c b c d e c",
        end: "a a a a",
      },
    ],
  };
  return r;
}
