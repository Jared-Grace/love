export function app_new_rule_set_new_2() {
  let r = {
    name: "Expressions 1",
    rules: ["pe > id", "pe > li", "pe > ( e )"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
