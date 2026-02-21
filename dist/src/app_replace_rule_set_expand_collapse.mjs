export function app_replace_rule_set_expand_collapse() {
  let r = {
    name: "Expand Collapse",
    rules: ["a > b b", "b b > c"],
    goals: [
      {
        start: "a",
        end: "c",
      },
      {
        start: "aa",
        end: "cc",
      },
      {
        start: "bab",
        end: "cc",
      },
      {
        start: "aa",
        end: "bcb",
      },
      {
        start: "aaa",
        end: "bccb",
      },
      {
        start: "aaaaa",
        end: "acbbca",
      },
    ],
  };
  return r;
}
