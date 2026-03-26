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
    why: "The replacement rule demonstrates a grammar that simplifies sequences by removing matching 'c' symbols from both ends of a string when they surround a specific pattern ('e = b'). This shows how the grammar can 'shrink' a string with repeated elements on both sides to a core expression, illustrating symmetry and reduction in formal grammars.",
  };
  return r;
}
