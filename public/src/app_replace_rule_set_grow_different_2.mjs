export function app_replace_rule_set_grow_different_2() {
  let r = {
    name: "Grow Different 2",
    rules: ["a > b c", "b > d e"],
    goals: [
      {
        start: "a",
        end: "d e c",
      },
      {
        start: "a a",
        end: "d e c d e c",
      },
      {
        start: "a a a a",
        end: "d e c b c b c d e c",
      },
    ],
    why: "The replacement rules demonstrate a simple context-free grammar where the symbol 'a' expands into 'b c', and 'b' further expands into 'd e'. This shows how a starting symbol can be systematically rewritten into a sequence of terminal symbols through a series of rule applications, illustrating the process of derivation in formal grammars.",
  };
  return r;
}
