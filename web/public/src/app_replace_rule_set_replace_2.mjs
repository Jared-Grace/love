export function app_replace_rule_set_replace_2() {
  return {
    name: "Replace 2",
    rules: ["a > b", "c > d"],
    goals: [
      {
        start: "ac",
        end: "bd",
      },
      {
        start: "aca",
        end: "bdb",
      },
      {
        start: "cabacd",
        end: "dbbbdd",
      },
      {
        start: "caaaaac",
        end: "dbababd",
      },
    ],
  };
}
