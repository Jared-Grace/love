export function app_replace_rule_set_same_replace_right() {
  let r = {
    name: "Same Replace Right",
    rules: ["a a > a b"],
    goals: [
      {
        start: "a a a a",
        end: "a a b a",
      },
      {
        start: "a a a a",
        end: "a b a b",
      },
      {
        start: "a a a a a a a a",
        end: "a b a a b a a b",
      },
    ],
  };
  return r;
}
