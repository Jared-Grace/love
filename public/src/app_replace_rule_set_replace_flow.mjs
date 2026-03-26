export function app_replace_rule_set_replace_flow() {
  let r = {
    name: "Replace Flow",
    rules: ["a > b", "b > c"],
    goals: [
      {
        start: "a b",
        end: "c c",
      },
      {
        start: "a c b",
        end: "c c c",
      },
      {
        start: "c a b a d c",
        end: "c c b c d c",
      },
      {
        start: "c a a a a a c",
        end: "c c a b c c c",
      },
    ],
    why: "The replacement rules demonstrate a sequential substitution process where 'a' is replaced by 'b', and then 'b' is replaced by 'c'. This shows how a series of simple, local replacement rules can be applied repeatedly to transform an initial sequence into a final sequence, illustrating the concept of rule-based string rewriting in formal grammars.",
  };
  return r;
}
