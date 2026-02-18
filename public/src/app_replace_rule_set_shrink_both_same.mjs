export function app_replace_rule_set_shrink_both_same() {
  let r = {
    name: "Shrink Both Same",
    rules: ["a b a > b"],
    goals: [
      {
        end: "cabac",
        start: "cbc",
      },
      {
        end: "aaabaaa",
        start: "aba",
      },
      {
        end: "aaaaabaaaaa",
        start: "aba",
      },
    ],
  };
  return r;
}
