export function app_replace_rule_set_grow_same_three_different() {
  let r = {
    name: "Grow Same Three Different",
    rules: ["e = b > c e = b c"],
    goals: [
      {
        start: "e=b",
        end: "cce=bcc",
      },
      {
        start: "e=b",
        end: "cccce=bcccc",
      },
    ],
  };
  return r;
}
