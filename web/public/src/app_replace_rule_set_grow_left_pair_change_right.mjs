export function app_replace_rule_set_grow_left_pair_change_right() {
  let r = {
    name: "Grow Left Pair Change Right",
    rules: ["a > b a", "b b > b c"],
    goals: [
      {
        start: "a a",
        end: "b a b a",
      },
      {
        start: "a",
        end: "b b a",
      },
      {
        start: "b b a",
        end: "b c a",
      },
      {
        start: "a",
        end: "b b b a",
      },
      {
        start: "a",
        end: "b c b c a",
      },
      {
        start: "a a",
        end: "b c b a b c b a",
      },
    ],
    why: "The replacement rules demonstrate a grammar that grows sequences by repeatedly expanding 'a' into 'b a' (growing to the left), and then, whenever two 'b's are adjacent, the pair 'b b' can be changed into 'b c' (changing the right element). This shows how simple local rules can generate increasingly complex patterns by alternately expanding and transforming parts of a string.",
  };
  return r;
}
