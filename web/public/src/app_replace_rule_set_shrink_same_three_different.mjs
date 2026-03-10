export function app_replace_rule_set_shrink_same_three_different() {
  let r = {
    name: "Shrink Same Three Different",
    rules: ["c e = b c > e = b"],
    goals: [
      {
        start: "c c e = b c c",
        end: "e = b",
      },
      {
        start: "c c c c e = b c c c c",
        end: "e = b",
      },
    ],
  };
  return r;
}
