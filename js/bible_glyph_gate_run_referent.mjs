import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_gate_run_referents } from "./bible_glyph_gate_run_referents.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { assert_json } from "./assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { not_equal } from "./not_equal.mjs";
export function bible_glyph_gate_run_referent(characters) {
  arguments_assert(arguments, 1);
  let r = bible_glyph_gate_run_referents(characters);
  let referents = property_get(r, "referents");
  let seated = property_get(r, "seated");
  let known = property_get(r, "known");
  for (let referent of referents) {
    let named = property_exists(seated, referent.strong);
    assert_json(named, {
      strong: referent.strong,
      hint: "a referent rule overrides a word no root seats, so there is nothing to override - seat the word first",
    });
    for (let glyph of referent.glyphs) {
      let drawn = property_exists(known, glyph);
      let f_name = fn_name("bible_glyph_characters");
      assert_json(drawn, {
        strong: referent.strong,
        glyph,
        hint: text_combine_multiple([
          "a referent rule names a glyph the vocabulary does not carry - add it to ",
          f_name,
          " or fix the spelling",
        ]),
      });
    }
    let by_verses = property_exists(referent, "verses");
    let by_phrase = property_exists(referent, "phrase");
    let one = not_equal(by_verses, by_phrase);
    assert_json(one, {
      strong: referent.strong,
      hint: "a referent rule says WHERE it applies by naming verses or by naming a phrase, and must name exactly one of the two",
    });
  }
  return known;
}
