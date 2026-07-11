export function app_replace_rule_set_swap_3() {
  let r = {
    name: "Swap 3",
    rules: ["a b > b a", "a c > c a", "a d > d a"],
    goals: [
      {
        start: "a c d b d",
        end: "c d b d a",
      },
      {
        start: "a d b a d c",
        end: "d b d c a a",
      },
      {
        start: "a d b c a d c b",
        end: "d b c d c b a a",
      },
    ],
    why: "The replacement rules demonstrate a grammar for swapping the letter 'a' with any immediately following letter ('b', 'c', or 'd'), allowing 'a' to move rightward through a sequence by repeated applications.",
  };
  return r;
}
