export function app_new_rule_set_new_2() {
  let r = {
    name: "Expressions function calls",
    rules: ["ce > me", "ce > ce ( )"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
