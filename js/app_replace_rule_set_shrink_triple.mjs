export function app_replace_rule_set_shrink_triple() {
  let r = {
    name: "Shrink Triple",
    rules: ["a a a > a"],
    goals: [
      {
        start: "a   a   a",
        end: "a",
      },
      {
        start: "a   a   a   a   a",
        end: "a",
      },
      {
        start: "a   a   a   a   a   a   a",
        end: "a",
      },
    ],
    why: "Three 'a's in a row become one, so each use removes two. This is the rule before this one, read backwards.",
  };
  return r;
}
