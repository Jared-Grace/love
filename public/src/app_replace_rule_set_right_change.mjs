export function app_replace_rule_set_right_change() {
  let r = {
    name: "Right Change",
    rules: ["a b > a c"],
    goals: [
      {
        start: "ababab",
        end: "ababac",
      },
      {
        start: "ababab",
        end: "acabac",
      },
      {
        start: "abaabaaabaaaab",
        end: "acaacaaacaaaac",
      },
    ],
  };
  return r;
}
