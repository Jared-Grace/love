export function app_replace_rule_set_replace_flow() {
  let r = {
    name: "Replace Flow",
    rules: ["a > b", "b > c"],
    goals: [
      {
        start: "a b",
        end: "c c",
      },
      {
        start: "a c b",
        end: "c c c",
      },
      {
        start: "c a b a d c",
        end: "c c b c d c",
      },
      {
        start: "c a a a a a c",
        end: "c c a b c c c",
      },
    ],
  };
  return r;
}
