import { bible_glyph_roots_hebrew } from "./bible_glyph_roots_hebrew.mjs";
import { bible_glyph_roots } from "./bible_glyph_roots.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { bible_glyph_roots_root_lookup } from "./bible_glyph_roots_root_lookup.mjs";
export function bible_glyph_reference_tables() {
  "The pictures already drawn and the roots they are filed under, for both languages at once, keyed by the letter Strong's writes before a number.";
  "A REFERENCE IS LOOKED UP IN ITS OWN LANGUAGE'S TABLE. A Greek word of Hebrew origin points at a Hebrew number, and that number means a Hebrew word, so it is asked of the Hebrew table; that is also what keeps a word's picture the same in both testaments.";
  let hebrew = bible_glyph_roots_hebrew();
  let greek = bible_glyph_roots();
  let tables = {
    H: {
      drawn: bible_glyph_roots_drawn_lookup(hebrew),
      filed: bible_glyph_roots_root_lookup(hebrew),
    },
    G: {
      drawn: bible_glyph_roots_drawn_lookup(greek),
      filed: bible_glyph_roots_root_lookup(greek),
    },
  };
  return tables;
}
