export function app_replace_rule_set_replace_flow() {
  let r = {
    name: "Replace Flow",
    rules: ["a > b", "b > c"],
    goals: [
      {
        start: "ab",
        end: "cc",
      },
      {
        start: "acb",
        end: "ccc",
      },
      {
        start: "cabadc",
        end: "ccbcdc",
      },
      {
        start: "caaaaac",
        end: "ccabccc",
      },
    ],
  };
  return r;
}
