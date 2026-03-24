export function app_replace_rule_set_expressions_1() {
  let r = {
    name: "Expressions 1",
    rules: ["pe > id", "pe > li", "pe > ( e )", "li > n", "n > de", "n > i"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
