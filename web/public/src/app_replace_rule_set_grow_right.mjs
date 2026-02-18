export function app_replace_rule_set_grow_right() {
  let r = {
    name: "Grow right",
    rules: ["a > a b"],
    goals: [
      {
        start: "a",
        end: "abb",
      },
      {
        start: "aa",
        end: "abbab",
      },
      {
        start: "aa",
        end: "abbabbb",
      },
      {
        start: "aaa",
        end: "ababbabbb",
      },
    ],
  };
  return r;
}
