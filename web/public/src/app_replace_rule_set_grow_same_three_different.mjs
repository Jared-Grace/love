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
    why: "The replacement rules demonstrate a grammar that grows the sequence by adding a 'c' to both ends of the current string, while preserving the 'e = b' core. This shows how a simple rule can recursively expand a structure in a symmetric way, illustrating the concept of context-free grammar expansion.",
  };
  return r;
}
