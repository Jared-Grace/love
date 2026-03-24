export function app_replace_rule_set_boolean_literal() {
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
