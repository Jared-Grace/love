export function app_replace_rule_set_grow_between() {
  let r = {
    name: "Grow Between",
    rules: ["a a > a b a"],
    goals: [
      {
        start: "aaa",
        end: "aaaba",
      },
      {
        start: "aaaa",
        end: "abaaaba",
      },
      {
        start: "aaaaaa",
        end: "abaabaaba",
      },
    ],
  };
  return r;
}
