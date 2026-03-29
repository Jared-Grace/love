export function app_replace_rule_set_shrink_between() {
  let r = {
    name: "Shrink Between",
    rules: ["a b a > a a"],
    goals: [
      {
        start: "a a a b a",
        end: "a a a a",
      },
      {
        start: "a b a a a b a",
        end: "a a a a a",
      },
      {
        start: "a b a a b a a b a",
        end: "a a a a a a",
      },
    ],
    why: "The rules demonstrate a grammar that removes every 'b' that is surrounded by 'a's, effectively shrinking sequences by eliminating such 'b's, as shown by transforming the start strings into end strings with only 'a's.",
    rules_used: [
      [
        {
          left: ["a", "b", "a"],
          right: ["a", "a"],
          original: "a b a > a a",
        },
      ],
      [
        {
          left: ["a", "b", "a"],
          right: ["a", "a"],
          original: "a b a > a a",
        },
      ],
      [
        {
          left: ["a", "b", "a"],
          right: ["a", "a"],
          original: "a b a > a a",
        },
      ],
    ],
  };
  return r;
}
