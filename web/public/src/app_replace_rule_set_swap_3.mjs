export function app_replace_rule_set_swap_3() {
  let r = {
    name: "Swap",
    rules: ["a b > b a", "a c > c a", "a d > d a"],
    goals: [
      {
        start: "acdbd",
        end: "cdbda",
      },
      {
        start: "adbadc",
        end: "dbdcaa",
      },
    ],
  };
  return r;
}
