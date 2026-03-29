export function app_replace_rule_set_half() {
  let r = {
    name: "Half",
    rules: ["a a > a"],
    goals: [
      {
        start: "a a",
        end: "a",
      },
      {
        start: "a a a",
        end: "a",
      },
      {
        start: "a a a a a",
        end: "a",
      },
    ],
    why: "The replacement rule demonstrates a grammar that reduces any even number of 'a's to a single 'a', but cannot reduce an odd number of 'a's beyond a single 'a', as only pairs of 'a's can be replaced.",
    rules_used: [
      [
        {
          left: ["a", "a"],
          right: ["a"],
          original: "a a > a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a"],
          original: "a a > a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a"],
          original: "a a > a",
        },
      ],
    ],
  };
  return r;
}
