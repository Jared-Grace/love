export function app_replace_rule_set_swap() {
  let r = {
    name: "Swap",
    rules: ["a b > b a"],
    goals: [
      {
        start: "a b b",
        end: "b b a",
      },
      {
        start: "a b b b b",
        end: "b b b b a",
      },
      {
        start: "a b b a b b",
        end: "b b b b a a",
      },
      {
        start: "a a a b",
        end: "b a a a",
      },
    ],
  };
  return r;
}
