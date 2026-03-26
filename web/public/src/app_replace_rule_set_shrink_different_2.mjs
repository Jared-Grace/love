export function app_replace_rule_set_shrink_different_2() {
  let r = {
    name: "Shrink Different 2",
    rules: ["b c > a", "d e > b"],
    goals: [
      {
        start: "d e c",
        end: "a",
      },
      {
        start: "d e c d e c",
        end: "a a",
      },
      {
        start: "d e c b c b c d e c",
        end: "a a a a",
      },
    ],
    why: "These replacement rules demonstrate a grammar that reduces sequences of symbols by combining specific pairs into a single symbol, ultimately shrinking longer sequences into fewer symbols. Specifically, the rules show how 'd' and 'e' combine to form 'b', and then 'b' and 'c' combine to form 'a'. This process can be applied iteratively to transform longer starting sequences into shorter goal sequences, illustrating hierarchical reduction in formal grammars.",
  };
  return r;
}
