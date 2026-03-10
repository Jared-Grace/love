export function app_replace_rule_set_shrink_between() {
  let r = {
    name: "Shrink Between",
    rules: ["a b a > a a"],
    goals: [
      {
        start: "a a a b a",
        end: "a a a a",
      },
      {
        start: "a b a a a b a",
        end: "a a a a a",
      },
      {
        start: "a b a a b a a b a",
        end: "a a a a a a",
      },
    ],
  };
  return r;
}
