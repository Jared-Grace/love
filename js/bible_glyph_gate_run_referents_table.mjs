import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { property_exists } from "./property_exists.mjs";
import { fn_name } from "./fn_name.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
export function bible_glyph_gate_run_referents_table(roots, known) {
  "The two checks every seed glyph table owes, run over ONE table.";
  "$plain roots";
  "$plain known";
  "It is run once per table rather than once over both joined together, and the seating check is the whole reason. A STRONG'S NUMBER IS A TESTAMENT'S OWN, so Hebrew 3068 and Greek 3068 are different words wearing one key. Joining the tables would report every such pair as one word seated under two roots - thousands of them, all of them false - and the check would have to be deleted to get a green build. Kept separate, each map holds one testament's keys and the check means what it says.";
  "A glyph a root names must be one the vocabulary carries, or the reader meets a blank where a picture should be, and nothing else in the build notices.";
  "A ROOT MAY NAME A GROUP OF PICTURES rather than one, so the field is asked about a name at a time and the whole field is still reported, since the whole field is the word. The second check below stays on the whole field on purpose: two roots sharing a group is exactly the collision that check is for, and splitting it there would let two words be given the same pair of pictures without a word being said.";
  "A word may belong to only ONE root. The same number seated twice gives one word two glyphs with nothing to say which wins, so the winner falls out of the order the table happens to be written in - a bug that reads as an opinion.";
  let seated = {};
  for (let root of roots) {
    for (let word of root.words) {
      for (let name of bible_glyph_group_names(word.glyph)) {
        let drawn = property_exists(known, name);
        let f_name = fn_name("bible_glyph_characters");
        assert_json(drawn, {
          root: root.root,
          strong: word.strong,
          glyph: word.glyph,
          name,
          hint: text_combine_multiple([
            "a root names a glyph the vocabulary does not carry - add it to ",
            f_name,
            " or fix the spelling",
          ]),
        });
      }
      let b = property_exists_not(seated, word.strong);
      let value = property_get_or_null(seated, word.strong);
      assert_json(b, {
        strong: word.strong,
        roots: [value, root.root],
        hint: "one word is seated under two roots, so which glyph it gets depends on table order - give the word to one root",
      });
      property_set(seated, word.strong, root.root);
    }
  }
  return seated;
}
