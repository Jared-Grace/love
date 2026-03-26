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
    why: "The replacement rules demonstrate a simple swapping operation where every occurrence of 'a' followed by 'b' can be replaced with 'b' followed by 'a'. This allows any 'a' to move rightward past adjacent 'b's, effectively sorting all 'a's to the right and all 'b's to the left in the sequence.",
  };
  return r;
}
