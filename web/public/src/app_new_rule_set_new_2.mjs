export function app_new_rule_set_new_2() {
  const rules = ["me > pe", "me > me . id", "me > [ e ]"];
  let r = {
    name: "Expressions member and access",
    rules: rules,
    goals: [
      {
        start: "me",
        end: "b",
      },
    ],
  };
  return r;
}
