export function app_new_rule_set_new_2() {
  let r = {
    name: "Expressions member and access",
    rules: ["me > pe", "me > me . id", "me > [ e ]"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
