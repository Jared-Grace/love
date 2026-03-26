export function app_replace_rule_set_grow_between() {
  let r = {
    name: "Grow Between",
    rules: ["a a > a b a"],
    goals: [
      {
        start: "a a a",
        end: "a a b a",
      },
      {
        start: "a a a a",
        end: "a b a a b a",
      },
      {
        start: "a a a a a a",
        end: "a b a a b a a b a",
      },
    ],
    why: "The replacement rules demonstrate a context-free grammar where every occurrence of two consecutive 'a's is replaced by 'a', 'b', 'a', effectively growing the string by inserting 'b' between each pair of 'a's. This shows how a simple rule can recursively expand a string, illustrating the concept of string rewriting and growth in formal grammars.",
  };
  return r;
}
