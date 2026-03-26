export function app_replace_rule_set_replace_2() {
  let r = {
    name: "Replace 2",
    rules: ["a > b", "c > d"],
    goals: [
      {
        start: "a c",
        end: "b d",
      },
      {
        start: "a c a",
        end: "b d b",
      },
      {
        start: "c a b a c d",
        end: "d b b b d d",
      },
      {
        start: "c a a a a a c",
        end: "d b a b a b d",
      },
    ],
    why: "These replacement rules demonstrate a simple substitution grammar where each 'a' is replaced by 'b' and each 'c' is replaced by 'd'. The examples show how sequences of 'a' and 'c' in the start strings are systematically transformed into sequences of 'b' and 'd' in the end strings, illustrating direct one-to-one symbol replacement.",
  };
  return r;
}
