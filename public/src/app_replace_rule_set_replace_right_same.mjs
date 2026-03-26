export function app_replace_rule_set_replace_right_same() {
  let r = {
    name: "Replace Right Same",
    rules: ["a b > a a"],
    goals: [
      {
        start: "a b a b a b",
        end: "a b a a a b",
      },
      {
        start: "a b a b",
        end: "a a a a",
      },
      {
        start: "a b a a b a a b",
        end: "a a a a a a a a",
      },
    ],
    why: "The replacement rules demonstrate a grammar where every occurrence of the sequence 'a b' can be replaced with 'a a'. This shows a process of systematically replacing 'b's that follow 'a's with 'a's, effectively transforming sequences with 'a b' pairs into sequences with only 'a's, or reducing the number of 'b's in the string.",
  };
  return r;
}
