export function app_replace_rule_set_replace_right_same() {
  let r = {
    name: "Replace Right Same",
    rules: ["a b > a a"],
    goals: [
      {
        start: "ababab",
        end: "abaaab",
      },
      {
        start: "abab",
        end: "aaaa",
      },
      {
        start: "abaabaab",
        end: "aaaaaaaa",
      },
    ],
  };
  return r;
}
