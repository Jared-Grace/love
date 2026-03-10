export function app_replace_rule_set_three_different_grow_same() {
  let r = {
    name: "Three Different Grow Same",
    rules: ["e = b > c e = b c"],
    goals: [
      {
        start: "e = b",
        end: "c c e = b c c",
      },
      {
        start: "e = b",
        end: "c c c c e = b c c c c",
      },
    ],
  };
  return r;
}
