export function app_replace_rule_set_shrink_right() {
  let r = {
    name: "Shrink right",
    rules: ["a b > a"],
    goals: [
      {
        start: "abb",
        end: "a",
      },
      {
        start: "abbab",
        end: "aa",
      },
      {
        start: "abbabbb",
        end: "aa",
      },
      {
        start: "ababbabbb",
        end: "aaa",
      },
    ],
  };
  return r;
}
