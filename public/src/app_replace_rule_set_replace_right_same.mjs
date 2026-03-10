export function app_replace_rule_set_replace_right_same() {
  let r = {
    name: "Replace Right Same",
    rules: ["a b > a a"],
    goals: [
      {
        start: "a b a b a b",
        end: "a b a a a b",
      },
      {
        start: "a b a b",
        end: "a a a a",
      },
      {
        start: "a b a a b a a b",
        end: "a a a a a a a a",
      },
    ],
  };
  return r;
}
