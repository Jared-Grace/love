export function app_replace_rule_set_right_change() {
  let r = {
    name: "Right Change",
    rules: ["a b > a c"],
    goals: [
      {
        start: "a b a b a b",
        end: "a b a b a c",
      },
      {
        start: "a b a b a b",
        end: "a c a b a c",
      },
      {
        start: "a b a a b a a a b a a a a b",
        end: "a c a a c a a a c a a a a c",
      },
    ],
    why: "The replacement rules demonstrate a simple context-free grammar where every occurrence of the sequence ['a', 'b'] can be replaced by ['a', 'c']. This allows for the systematic transformation of strings by changing each 'b' that follows an 'a' into a 'c', illustrating a pattern-based substitution process.",
  };
  return r;
}
