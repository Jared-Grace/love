export function app_replace_rule_set_shrink_right() {
  let r = {
    name: "Shrink Right",
    rules: ["a b > a"],
    goals: [
      {
        start: "a b b",
        end: "a",
      },
      {
        start: "a b b a b",
        end: "a a",
      },
      {
        start: "a b b a b b b",
        end: "a a",
      },
      {
        start: "a b a b b a b b b",
        end: "a a a",
      },
    ],
    why: "The replacement rules demonstrate a grammar that repeatedly reduces any occurrence of the sequence ['a', 'b'] to just ['a']. This process effectively 'shrinks' the rightmost 'b' in any 'a b' pair, simplifying sequences with interleaved 'a's and 'b's down to sequences with only 'a's. The examples show how longer sequences with multiple 'a b' pairs are reduced to fewer 'a's, illustrating the rule's effect.",
  };
  return r;
}
