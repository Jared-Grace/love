export function app_replace_rule_set_swap_change_right() {
  let r = {
    name: "Swap Change Right",
    rules: ["a b > b c"],
    goals: [
      {
        start: "a a b",
        end: "b c c",
      },
      {
        start: "a b a b a b",
        end: "a b a b b c",
      },
      {
        start: "a b a b a b a b",
        end: "b c b c a b b c",
      },
      {
        start: "a a a a b",
        end: "b c c c c",
      },
      {
        start: "a b a b a b a b a b a b",
        end: "a b b c a b b c b c b c",
      },
    ],
    why: "The replacement rules demonstrate a grammar where every occurrence of the sequence ['a', 'b'] can be replaced with ['b', 'c']. This allows for the transformation of an initial sequence by repeatedly swapping 'a' and 'b' for 'b' and 'c', effectively shifting and changing the sequence to the right. The examples show how repeated application of this rule can systematically convert all 'a','b' pairs into 'b','c' pairs throughout a string.",
  };
  return r;
}
