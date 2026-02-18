export function app_replace_rule_set_double() {
  let r = {
    name: "Double",
    rules: ["a > a a"],
    goals: [
      {
        start: "a",
        end: "aa",
      },
      {
        start: "a",
        end: "aaa",
      },
      {
        start: "a",
        end: "aaaaa",
      },
    ],
  };
  return r;
}
