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
    why: "The replacement rules demonstrate a local swapping mechanism where 'a' can swap places with either 'b' or 'c' when they are adjacent. This allows 'a' to move rightward past any sequence of 'b's and 'c's, effectively shifting 'a' to the end of the string while preserving the order of the other elements. The goals show examples of moving 'a' from its initial position to the end using these swaps.",
  };
  return r;
}
