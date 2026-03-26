export function app_replace_rule_set_same_replace_right() {
  let r = {
    name: "Same Replace Right",
    rules: ["a a > a b"],
    goals: [
      {
        start: "a a a a",
        end: "a a b a",
      },
      {
        start: "a a a a",
        end: "a b a b",
      },
      {
        start: "a a a a a a a a",
        end: "a b a a b a a b",
      },
    ],
    why: "These replacement rules demonstrate a simple string rewriting system where every occurrence of two consecutive 'a's is replaced by 'a' followed by 'b'. This shows how a repetitive pattern in a string can be systematically transformed into a new pattern by applying the rule from left to right.",
  };
  return r;
}
