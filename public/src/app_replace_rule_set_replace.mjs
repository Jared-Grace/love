export function app_replace_rule_set_replace() {
  let r = {
    name: "Replace",
    rules: ["a > b"],
    goals: [
      {
        start: "a",
        end: "b",
      },
      {
        start: "a a",
        end: "b b",
      },
      {
        start: "a a a",
        end: "b b b",
      },
      {
        start: "a a a a",
        end: "a b b a",
      },
      {
        start: "a a a a a a a",
        end: "a b a b a b a",
      },
    ],
    why: "The replacement rules demonstrate a simple substitution grammar where every occurrence of 'a' is replaced by 'b'. This is shown by the rule {'a' -> 'b'}, and the goals illustrate how any string of 'a's is transformed into a string of 'b's of the same length. The last two goals, however, show partial application or selective replacement, suggesting the grammar could also be used to demonstrate non-uniform or incomplete application of rules.",
  };
  return r;
}
