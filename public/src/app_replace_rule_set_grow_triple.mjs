export function app_replace_rule_set_grow_triple() {
  let r = {
    name: "Grow Triple",
    rules: ["a > a a a"],
    goals: [
      {
        start: "a",
        end: "a a a",
      },
      {
        start: "a",
        end: "a a a a a",
      },
      {
        start: "a",
        end: "a a a a a a a",
      },
    ],
    why: "The replacement rules demonstrate a grammar that triples the number of 'a's in each derivation step. Starting from a single 'a', each application of the rule replaces one 'a' with three, allowing the generation of sequences whose lengths are powers of three. The goals show how the grammar can derive strings of 3, 5, or 7 'a's from a single 'a' by repeated application and partial expansion.",
  };
  return r;
}
