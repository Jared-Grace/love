export function app_replace_rule_set_swap_change_left() {
  let r = {
    name: "Swap Change Left",
    rules: ["b c > a b"],
    goals: [
      {
        start: "b c c",
        end: "a a b",
      },
      {
        start: "b c b c b c",
        end: "b c b c a b",
      },
      {
        start: "b c b c a b b c",
        end: "a b a b a b a b",
      },
      {
        start: "b c c c c",
        end: "a a a a b",
      },
      {
        start: "a b b c a b b c b c b c",
        end: "a b a b a b a b a b a b",
      },
    ],
    why: "The replacement rules demonstrate a simple string rewriting system where every occurrence of the sequence ['b', 'c'] is replaced with ['a', 'b']. This process can be applied repeatedly to transform a starting sequence into a desired end sequence, illustrating how local substitution rules can systematically alter a string to achieve a specific pattern.",
  };
  return r;
}
