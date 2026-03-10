export function app_replace_rule_set_replace_left_same() {
  let r = {
    name: "Replace Left Same",
    rules: ["b a > a a"],
    goals: [
      {
        start: "b a b a b a",
        end: "b a a a b a",
      },
      {
        start: "b a b a",
        end: "a a a a",
      },
      {
        start: "b a a b a a b a",
        end: "a a a a a a a a",
      },
    ],
  };
  return r;
}
