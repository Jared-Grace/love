export function app_replace_rule_set_replace_left_same() {
  return {
    name: "Replace Left Same",
    rules: ["b a > a a"],
    goals: [
      {
        start: "bababa",
        end: "baaaba",
      },
      {
        start: "baba",
        end: "aaaa",
      },
      {
        start: "baabaaba",
        end: "aaaaaaaa",
      },
    ],
  };
}
