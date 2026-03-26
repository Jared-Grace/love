export function app_replace_rule_set_replace_left_same() {
  let r = {
    name: "Replace Left Same",
    rules: ["b a > a a"],
    goals: [
      {
        start: "b a b a b a",
        end: "b a a a b a",
      },
      {
        start: "b a b a",
        end: "a a a a",
      },
      {
        start: "b a a b a a b a",
        end: "a a a a a a a a",
      },
    ],
    why: "These replacement rules demonstrate a grammar where every occurrence of the sequence 'b a' is replaced with 'a a'. This shows a process of systematically transforming all 'b a' pairs in a string into 'a a', effectively eliminating all 'b's that are immediately followed by 'a', and increasing the number of 'a's in the string.",
  };
  return r;
}
