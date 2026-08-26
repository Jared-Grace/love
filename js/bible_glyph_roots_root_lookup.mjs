import { property_set } from "./property_set.mjs";
export function bible_glyph_roots_root_lookup(roots) {
  "A seed glyph table flattened to the other question a reader asks of it: given a Strong's number, which ROOT the table files it under.";
  "$plain roots";
  "The sibling next door answers which GLYPH a number is drawn as, which is what a page needs. This answers which family it belongs to, which is what anybody examining the table itself needs - and the two are different questions exactly where it matters, because a glyph shared by two roots is the fault the collisions gate watches for, and the glyph alone cannot say which of them a word came from.";
  "A number seated twice under two roots would be a table fault of its own and nothing here hides it; the later line simply wins, the same way the sibling's does, because a lookup cannot report and a caller asking one number wants one answer.";
  let filed = {};
  for (let root of roots) {
    for (let word of root.words) {
      property_set(filed, word.strong, root.root);
    }
  }
  return filed;
}
