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
        end: "b c b c b c b c",
      },
    ],
    why: "The replacement rules demonstrate a simple context-free grammar where the symbol 'a' is always replaced by the sequence 'b c'. This shows how a single non-terminal can be expanded into a fixed sequence, and how repeated applications of the rule to multiple 'a's in the start string result in repeated 'b c' sequences in the output.",
  };
  return r;
}
