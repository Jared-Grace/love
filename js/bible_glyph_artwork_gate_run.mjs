import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { bible_glyph_artwork_names } from "./bible_glyph_artwork_names.mjs";
import { bible_glyph_artwork_absent } from "./bible_glyph_artwork_absent.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
export function bible_glyph_artwork_gate_run() {
  "Checks that every glyph in the vocabulary has been decided about: either the artwork set has a name for it, or the set is recorded as having no picture for it.";
  "A GLYPH ADDED WITHOUT A DECISION IS INVISIBLE OTHERWISE. Adding one is a small edit to the vocabulary, and the fetching run simply never asks for it - so the new glyph reaches readers drawn by the font while every glyph around it is drawn by the artwork, and nothing anywhere says which of those was intended.";
  "IT CHECKS BOTH DIRECTIONS, because the tables can drift apart either way. A glyph in neither table has been forgotten; a glyph in both has had two opposite decisions taken about it, and the fetching run would obey one while the record claims the other.";
  "IT NEEDS NO NETWORK, deliberately. Whether a name is right is a question for the artwork set and is answered by fetching; whether a decision was taken at all is a question about this repo alone, and a gate that has to reach the internet to answer it would go red when the internet did.";
  let glyphs = bible_glyph_characters();
  let names = bible_glyph_artwork_names();
  let absent = bible_glyph_artwork_absent();
  let decided = {};
  for (let entry of names) {
    property_set(decided, entry.glyph, "named");
  }
  for (let entry of absent) {
    let already = property_exists(decided, entry.glyph);
    let once = not(already);
    assert_json(once, {
      glyph: entry.glyph,
      hint: "this glyph is recorded both as having an artwork name and as having no picture in the set - which of the two is true?",
    });
    property_set(decided, entry.glyph, "absent");
  }
  let undecided = [];
  for (let glyph of glyphs) {
    let known = property_exists(decided, glyph.name);
    if (known) {
      continue;
    }
    list_add(undecided, glyph.name);
  }
  let none = list_empty_is(undecided);
  assert_json(none, {
    undecided,
    hint: "these glyphs have no artwork decision - give each one the name the artwork set draws it under, or record that the set has no picture for it.",
  });
  let r = {
    glyphs: glyphs.length,
    named: names.length,
    absent: absent.length,
  };
  return r;
}
