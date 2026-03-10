export function app_replace_rule_set_grow_different() {
  let r = {
    name: "Grow Different",
    rules: ["a > b c"],
    goals: [
      {
        start: "a",
        end: "b c",
      },
      {
        start: "a a",
        end: "b c b c",
      },
      {
        start: "a a a a",
        end: "b c b c b c b c",
      },
    ],
  };
  return r;
}
