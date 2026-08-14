export function app_replace_rule_set_replace_flow() {
  let r = {
    name: "Replace Flow",
    rules: ["a > b", "b > c"],
    goals: [
      {
        start: "a   b",
        end: "c   c",
      },
      {
        start: "a   c   b",
        end: "c   c   c",
      },
      {
        start: "c   a   b   a   d   c",
        end: "c   c   b   c   d   c",
      },
      {
        start: "c   a   a   a   a   a   c",
        end: "c   c   a   b   c   c   c",
      },
    ],
    why: "Two rules that feed each other: an a becomes a b, and a b becomes a c. So an a can travel all the way to c, but only by passing through b.",
  };
  return r;
}
