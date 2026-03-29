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
    why: "The rules demonstrate a grammar where 'a' expands to two 'b's, and any pair of 'b's collapses into a 'c', modeling a process of binary expansion and reduction; this is evident from the way the goals transform sequences of 'a's and 'b's into sequences with 'c's via these rules.",
  };
  return r;
}
