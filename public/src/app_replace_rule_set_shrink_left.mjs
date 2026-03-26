export function app_replace_rule_set_shrink_left() {
  let r = {
    name: "Shrink Left",
    rules: ["b a > a"],
    goals: [
      {
        start: "b b a",
        end: "a",
      },
      {
        start: "b a b b a",
        end: "a a",
      },
      {
        start: "b b b a b b a",
        end: "a a",
      },
      {
        start: "b b b a b b a b a",
        end: "a a a",
      },
    ],
    why: "The replacement rules demonstrate a grammar that systematically reduces any occurrence of the sequence 'b a' to just 'a'. This process effectively 'shrinks' the leftmost 'b' in each 'b a' pair, simplifying sequences of 'b's followed by 'a's into fewer 'a's, as shown in the provided start and end examples.",
  };
  return r;
}
