export function bible_glyph_gate_run_referents_table(roots, known) {
  "The two checks every seed glyph table owes, run over ONE table.";
  "$plain roots";
  "$plain known";
  "It is run once per table rather than once over both joined together, and the seating check is the whole reason. A STRONG'S NUMBER IS A TESTAMENT'S OWN, so Hebrew 3068 and Greek 3068 are different words wearing one key. Joining the tables would report every such pair as one word seated under two roots - thousands of them, all of them false - and the check would have to be deleted to get a green build. Kept separate, each map holds one testament's keys and the check means what it says.";
  "A glyph a root names must be one the vocabulary carries, or the reader meets a blank where a picture should be, and nothing else in the build notices.";
  "A word may belong to only ONE root. The same number seated twice gives one word two glyphs with nothing to say which wins, so the winner falls out of the order the table happens to be written in - a bug that reads as an opinion.";
  let seated = {};
  for (let root of roots) {
    for (let word of root.words) {
      let drawn = property_exists(known, word.glyph);
      let f_name = fn_name("bible_glyph_characters");
      assert_json(drawn, {
        root: root.root,
        strong: word.strong,
        glyph: word.glyph,
        hint: text_combine_multiple([
          "a root names a glyph the vocabulary does not carry - add it to ",
          f_name,
          " or fix the spelling",
        ]),
      });
      let taken = property_exists(seated, word.strong);
      let b2 = not(taken);
      let value = property_get_or_null(seated, word.strong);
      assert_json(b2, {
        strong: word.strong,
        roots: [value, root.root],
        hint: "one word is seated under two roots, so which glyph it gets depends on table order - give the word to one root",
      });
      property_set(seated, word.strong, root.root);
    }
  }
  return seated;
}
