export function app_replace_rule_set_swap() {
  return {
    name: "Swap",
    rules: ["a b > b a"],
    goals: [
      {
        start: "abb",
        end: "bba",
      },
      {
        start: "abbbb",
        end: "bbbba",
      },
      {
        start: "abbabb",
        end: "bbbbaa",
      },
    ],
  };
}
