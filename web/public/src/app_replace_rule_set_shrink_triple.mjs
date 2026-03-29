export function app_replace_rule_set_shrink_triple() {
  let r = {
    name: "Shrink Triple",
    rules: ["a a a > a"],
    goals: [
      {
        start: "a a a",
        end: "a",
      },
      {
        start: "a a a a a",
        end: "a",
      },
      {
        start: "a a a a a a a",
        end: "a",
      },
    ],
    why: "The rules demonstrate a grammar that reduces any sequence of three or more consecutive 'a's to a single 'a' by repeatedly replacing 'a a a' with 'a', showing a shrinking or compression process.",
    rules_used: [
      [
        {
          left: ["a", "a", "a"],
          right: ["a"],
        },
      ],
      [
        {
          left: ["a", "a", "a"],
          right: ["a"],
        },
      ],
      [
        {
          left: ["a", "a", "a"],
          right: ["a"],
        },
      ],
    ],
  };
  return r;
}
