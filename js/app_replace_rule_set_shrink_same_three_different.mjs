export function app_replace_rule_set_shrink_same_three_different() {
  let r = {
    name: "Shrink Same Three Different",
    rules: ["c e = b c > e = b"],
    goals: [
      {
        start: "c   c   e   =   b   c   c",
        end: "e   =   b",
      },
      {
        start: "c   c   c   c   e   =   b   c   c   c   c",
        end: "e   =   b",
      },
    ],
    why: "The same rule backwards: one c comes off the left and one off the right together.",
  };
  return r;
}
