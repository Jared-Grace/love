export function app_replace_rule_set_grow_same_three_different() {
  return {
    name: "Grow Same Three Different",
    rules: ["c e b c > e b"],
    goals: [
      {
        start: "cce=bcc",
        end: "e=b",
      },
      {
        start: "cccce=bcccc",
        end: "e=b",
      },
    ],
  };
}
