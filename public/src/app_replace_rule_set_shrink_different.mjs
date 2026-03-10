export function app_replace_rule_set_shrink_different() {
  let r = {
    name: "Shrink Different",
    rules: ["b c > a"],
    goals: [
      {
        start: "b c",
        end: "a",
      },
      {
        start: "b c b c",
        end: "a a",
      },
      {
        start: "b c b c b c b c",
        end: "a a a a",
      },
    ],
  };
  return r;
}
