import { list_duplicates_by_property } from "./list_duplicates_by_property.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { bible_glyph_artwork_names } from "./bible_glyph_artwork_names.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function bible_glyph_names_unique_gate_run() {
  "Checks that no glyph name is given twice in the vocabulary or in the artwork list.";
  "A REPEATED NAME FAILS SILENTLY. Both lists are read into a lookup keyed by name, so the later entry wins and the earlier character loses its picture without any error. Measured 2026-10-03: a round pushpin was added under the name an older pushpin already had, and the older one's downloaded picture was overwritten by the new one's - every gate was green.";
  "IT PASSES AT ZERO AND ALWAYS SHOULD, so there is no baseline.";
  let list = bible_glyph_characters();
  let characters = list_duplicates_by_property(list, "name");
  let list2 = bible_glyph_artwork_names();
  let artwork = list_duplicates_by_property(list2, "glyph");
  let none = list_empty_is(characters) && list_empty_is(artwork);
  assert_json(none, {
    characters,
    artwork,
    hint: text_combine_multiple([
      "each name listed here is given twice - rename the later one in ",
      fn_name("bible_glyph_characters"),
      " and ",
      fn_name("bible_glyph_artwork_names"),
      ", and in every root seated under it",
    ]),
  });
  let r = {
    characters: bible_glyph_characters().length,
    artwork: bible_glyph_artwork_names().length,
  };
  return r;
}
