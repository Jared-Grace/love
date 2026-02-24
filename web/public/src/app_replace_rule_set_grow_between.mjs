export function app_replace_rule_set_grow_between() {
  let r = {
    name: "Grow Between",
    rules: ["a a > a b a"],
    goals: [
      {
        start: "aaa",
        end: "aaba",
      },
      {
        start: "aaaa",
        end: "abaaba",
      },
      {
        start: "aaaaaa",
        end: "abaabaaba",
      },
    ],
  };
  return r;
}
