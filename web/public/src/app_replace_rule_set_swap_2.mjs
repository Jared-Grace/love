export function app_replace_rule_set_swap_2() {
  let r = {
    name: "Swap 2",
    rules: ["a b > b a", "a c > c a"],
    goals: [
      {
        start: "a b c",
        end: "b c a",
      },
      {
        start: "a c b b c",
        end: "c b b c a",
      },
      {
        start: "a c b a c c",
        end: "c b c c a a",
      },
    ],
  };
  return r;
}
