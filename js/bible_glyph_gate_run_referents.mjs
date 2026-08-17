import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { assert_json } from "./assert_json.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_roots } from "./bible_glyph_roots.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { bible_glyph_referents } from "./bible_glyph_referents.mjs";
export function bible_glyph_gate_run_referents(characters) {
  arguments_assert(arguments, 1);
  let known = {};
  for (let character of characters) {
    let repeated = property_exists(known, character.name);
    let b = not(repeated);
    assert_json(b, {
      name: character.name,
      hint: "two glyphs share one name, so the later one silently wins - rename one of them",
    });
    property_set(known, character.name, character.character);
  }
  let roots = bible_glyph_roots();
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
  let referents = bible_glyph_referents();
  let r = {
    known,
    seated,
    referents,
  };
  return r;
}
