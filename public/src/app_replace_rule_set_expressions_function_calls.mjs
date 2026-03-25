export function app_replace_rule_set_expressions_function_calls() {
  let r = {
    name: "Expressions function calls",
    rules: [
      "ce > me",
      "ce > ce ( )",
      "ce > ce ( arg )",
      "arg > e, arg",
      "arg > e",
    ],
    goals: [
      {
        start: "ce",
        end: "id",
      },
    ],
  };
  return r;
}
