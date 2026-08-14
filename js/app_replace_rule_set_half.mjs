export function app_replace_rule_set_half() {
  let r = {
    name: "Half",
    rules: ["a a > a"],
    goals: [
      {
        start: "a   a",
        end: "a",
      },
      {
        start: "a   a   a",
        end: "a",
      },
      {
        start: "a   a   a   a   a",
        end: "a",
      },
    ],
    why: "Two 'a's side by side become one, so the count halves. An 'a' with no partner has nothing to pair with and stays as it is.",
  };
  return r;
}
