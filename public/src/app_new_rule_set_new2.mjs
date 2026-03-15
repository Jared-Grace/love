export function app_new_rule_set_new2() {
  let r = {
    name: "TODO",
    rules: ["a > b"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
