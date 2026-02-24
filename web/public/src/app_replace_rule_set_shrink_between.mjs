export function app_replace_rule_set_shrink_between() {
  let r = {
    name: "Shrink Between",
    rules: ["a b a > a a"],
    goals: [
      {
        start: "aaaba",
        end: "aaaa",
      },
      {
        start: "abaaaba",
        end: "aaaaa",
      },
      {
        start: "abaabaaba",
        end: "aaaaaa",
      },
    ],
  };
  return r;
}
