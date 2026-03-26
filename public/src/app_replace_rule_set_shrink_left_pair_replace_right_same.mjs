export function app_replace_rule_set_shrink_left_pair_replace_right_same() {
  let r = {
    name: "Shrink Left Pair Replace Right Same",
    rules: ["b a > a", "b c > b b"],
    goals: [
      {
        start: "b a b a",
        end: "a a",
      },
      {
        start: "b b a",
        end: "a",
      },
      {
        start: "b c a",
        end: "b b a",
      },
      {
        start: "b b b a",
        end: "a",
      },
      {
        start: "b c b c a",
        end: "a",
      },
      {
        start: "b c b a b c b a",
        end: "a a",
      },
    ],
    why: "These replacement rules demonstrate a grammar that systematically reduces sequences starting with 'b' followed by either 'a' or 'c' to simpler forms, ultimately aiming to produce strings of 'a' or 'a a'. The first rule shrinks the pair 'b a' to 'a', while the second rule replaces 'b c' with two 'b's, allowing further reductions. This shows how local pairwise replacements can be used to simplify or normalize strings according to specific patterns.",
  };
  return r;
}
