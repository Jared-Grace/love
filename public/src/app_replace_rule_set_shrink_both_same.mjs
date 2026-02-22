export function app_replace_rule_set_shrink_both_same() {
  let r = {
    name: "Shrink Both Same",
    rules: ["a b a > b"],
    goals: [
      {
        start: "cabac",
        end: "cbc",
      },
      {
        start: "aaabaaa",
        end: "aba",
      },
      {
        start: "aaaaabaaaaa",
        end: "aba",
      },
    ],
  };
  return r;
}
