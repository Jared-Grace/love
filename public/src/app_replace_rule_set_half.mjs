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
  };
  return r;
}
