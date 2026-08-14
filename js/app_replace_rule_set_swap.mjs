export function app_replace_rule_set_swap() {
  let r = {
    name: "Swap",
    rules: ["a b > b a"],
    goals: [
      {
        start: "a   b   b",
        end: "b   b   a",
      },
      {
        start: "a   b   b   b   b",
        end: "b   b   b   b   a",
      },
      {
        start: "a   b   b   a   b   b",
        end: "b   b   b   b   a   a",
      },
      {
        start: "a   a   a   b",
        end: "b   a   a   a",
      },
    ],
    why: "An a and the b after it trade places. Use it over and over and an a walks all the way to the right, one step per b it passes.",
  };
  return r;
}
