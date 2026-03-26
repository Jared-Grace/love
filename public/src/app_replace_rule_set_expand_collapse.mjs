export function app_replace_rule_set_expand_collapse() {
  let r = {
    name: "Expand Collapse",
    rules: ["a > b b", "b b > c"],
    goals: [
      {
        start: "a",
        end: "c",
      },
      {
        start: "a a",
        end: "c c",
      },
      {
        start: "b a b",
        end: "c c",
      },
      {
        start: "a a",
        end: "b c b",
      },
      {
        start: "a a a",
        end: "b c c b",
      },
      {
        start: "a a a a a",
        end: "a c b b c a",
      },
    ],
    why: "The replacement rules demonstrate a simple context-free grammar where the symbol 'a' expands to two 'b's, and any pair of 'b's collapses into a 'c'. This shows how a sequence can be expanded and then reduced, illustrating the process of derivation and simplification in formal grammars.",
  };
  return r;
}
