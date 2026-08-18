export function bible_glyph_gate_run_referents(characters) {
  arguments_assert(arguments, 1);
  "Every seed glyph table checked against the vocabulary of pictures, one testament at a time.";
  "$plain characters";
  "BOTH TABLES ARE WALKED, and only one of them used to be. The Greek table was gated from the day it was written and the Hebrew one arrived ungated, which is the quiet half of adding a second table: the new file is the one nobody has proved anything about yet, and it is exactly as able to name a misspelled glyph as the old one. Nothing would have failed - the reader would have met a blank.";
  "The SEATED map handed back is the Greek one, because the referent rules that consume it are Greek. The Hebrew map is built, checked and dropped: the checking is the point, not the map.";
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
  let greek = bible_glyph_roots();
  let seated = bible_glyph_gate_run_referents_table(greek, known);
  let hebrew = bible_glyph_roots_hebrew();
  bible_glyph_gate_run_referents_table(hebrew, known);
  let referents = bible_glyph_referents();
  let r = {
    known,
    seated,
    referents,
  };
  return r;
}
