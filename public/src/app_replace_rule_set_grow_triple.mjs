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
  };
  return r;
}
