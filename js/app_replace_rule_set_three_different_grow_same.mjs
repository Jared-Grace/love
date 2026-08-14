export function app_replace_rule_set_three_different_grow_same() {
  let r = {
    name: "Three Different Grow Same",
    rules: ["e = b > c e = b c"],
    goals: [
      {
        start: "e   =   b",
        end: "c   c   e   =   b   c   c",
      },
      {
        start: "e   =   b",
        end: "c   c   c   c   e   =   b   c   c   c   c",
      },
    ],
    why: "One 'c' joins on the left and one on the right, in a single move, with 'e' '=' 'b' held in the middle. The two sides always grow together.",
  };
  return r;
}
