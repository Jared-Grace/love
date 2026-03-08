export function app_replace_rule_set_swap_2() {
  let r = {
    name: "Swap 2",
    rules: ["a b > b a", "a c > c a"],
    goals: [
      {
        start: "abc",
        end: "bca",
      },
      {
        start: "acbcb",
        end: "cbbca",
      },
      {
        start: "acbacc",
        end: "cbccaa",
      },
    ],
  };
  return r;
}
