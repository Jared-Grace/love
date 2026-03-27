export function app_replace_rule_set_grow_different() {
  let r = {
    name: "Grow Different",
    rules: ["a > b c"],
    goals: [
      {
        start: "a",
        end: "b c",
      },
      {
        start: "a a",
        end: "b c b c",
      },
      {
        start: "a a a a",
        end: "b c b c a b c",
      },
    ],
    why: "The replacement rules demonstrate a grammar where the symbol 'a' is always replaced by the sequence 'b c', showing how repeated applications of the rule expand any sequence of 'a's into twice as many symbols, alternating 'b' and 'c'.",
  };
  return r;
}
