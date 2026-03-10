export function app_replace_rule_set_grow_between() {
  let r = {
    name: "Grow Between",
    rules: ["a a > a b a"],
    goals: [
      {
        start: "a a a",
        end: "a a b a",
      },
      {
        start: "a a a a",
        end: "a b a a b a",
      },
      {
        start: "a a a a a a",
        end: "a b a a b a a b a",
      },
    ],
  };
  return r;
}
