export function app_new_rule_set_new_2() {
  let r = {
    name: "Boolean Literal",
    rules: ["bo > true", "bo > false"],
    goals: [
      {
        start: "bo",
        end: "true",
      },
      {
        start: "bo",
        end: "false",
      },
    ],
  };
  return r;
}
