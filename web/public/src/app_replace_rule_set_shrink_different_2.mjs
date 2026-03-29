export function app_replace_rule_set_shrink_different_2() {
  let r = {
    name: "Shrink Different 2",
    rules: ["b c > a", "d e > b"],
    goals: [
      {
        start: "d e c",
        end: "a",
      },
      {
        start: "d e c d e c",
        end: "a a",
      },
      {
        start: "d e c b c b c d e c",
        end: "a a a a",
      },
    ],
    why: "The rules demonstrate how sequences of 'd','e' can be replaced by 'b', and then 'b','c' by 'a', allowing reduction of complex strings to simpler forms, ultimately transforming specific starting sequences into one or more 'a's.",
    rules_used: [
      [
        {
          left: ["d", "e"],
          right: ["b"],
        },
        {
          left: ["b", "c"],
          right: ["a"],
        },
      ],
      [
        {
          left: ["d", "e"],
          right: ["b"],
        },
        {
          left: ["b", "c"],
          right: ["a"],
        },
      ],
      [
        {
          left: ["d", "e"],
          right: ["b"],
        },
        {
          left: ["b", "c"],
          right: ["a"],
        },
      ],
    ],
  };
  return r;
}
