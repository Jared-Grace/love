export function app_replace_rule_set_grow_same_three_different() {
  let r = {
    name: "Grow Same Three Different",
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
    why: "The replacement rule demonstrates a grammar that grows the sequence by adding a 'c' to both ends of the string, showing how repeated application of the rule symmetrically expands the string around the central 'e = b' structure.",
  };
  return r;
}
