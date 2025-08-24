export function app_replace_rule_sets() {
  let v = [
    {
      name: "Grow",
      rules: ["a > a a"],
      start: "a",
    },
    {
      name: "Shrink",
      rules: ["a a > a"],
      start: "aaaaa",
    },
  ];
  return v;
}
