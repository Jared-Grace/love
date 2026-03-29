export function app_replace_rule_set_replace_flow() {
  let r = {
    name: "Replace Flow",
    rules: ["a > b", "b > c"],
    goals: [
      {
        start: "a b",
        end: "c c",
      },
      {
        start: "a c b",
        end: "c c c",
      },
      {
        start: "c a b a d c",
        end: "c c b c d c",
      },
      {
        start: "c a a a a a c",
        end: "c c a b c c c",
      },
    ],
    why: "The rules demonstrate a sequential symbol replacement system where 'a' is replaced by 'b', and then 'b' is replaced by 'c', showing a stepwise transformation of input strings towards a uniform output of 'c' symbols wherever possible.",
    rules_used: [
      [
        {
          left: ["a"],
          right: ["b"],
        },
        {
          left: ["b"],
          right: ["c"],
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
        },
        {
          left: ["b"],
          right: ["c"],
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
        },
        {
          left: ["b"],
          right: ["c"],
        },
      ],
      [
        {
          left: ["b"],
          right: ["c"],
        },
        {
          left: ["a"],
          right: ["b"],
        },
      ],
    ],
  };
  return r;
}
