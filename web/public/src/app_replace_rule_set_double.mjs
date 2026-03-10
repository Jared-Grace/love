export function app_replace_rule_set_double() {
  let r = {
    name: "Double",
    rules: ["a > a a"],
    goals: [
      {
        start: "a",
        end: "a a",
      },
      {
        start: "a",
        end: "a a a",
      },
      {
        start: "a",
        end: "a a a a a",
      },
    ],
  };
  return r;
}
