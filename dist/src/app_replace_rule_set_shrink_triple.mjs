export function app_replace_rule_set_shrink_triple() {
  let r = {
    name: "Shrink Triple",
    rules: ["a a a > a"],
    goals: [
      {
        start: "aaa",
        end: "a",
      },
      {
        start: "aaaaa",
        end: "a",
      },
      {
        start: "aaaaaaa",
        end: "a",
      },
    ],
  };
  return r;
}
