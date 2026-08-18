import { property_set } from "./property_set.mjs";
export function bible_glyph_roots_drawn_lookup(roots) {
  "A seed glyph table flattened to the one question a page asks of it: given a Strong's number, which glyph draws it.";
  "$plain roots";
  "The table is stored keyed by ROOT because that is how a person reads and edits it - the family is visible, and a word can be moved between families by moving a line. A page asks the opposite question, one word at a time, and asking it of the stored shape would mean walking every root for every word on the screen.";
  "Nothing here decides anything. A word the table does not seat is simply absent, and the caller says what an absent word looks like, because that answer differs: a survey counts it, a draft draws a gap where the reader can see one.";
  let drawn = {};
  for (let root of roots) {
    for (let word of root.words) {
      property_set(drawn, word.strong, word.glyph);
    }
  }
  return drawn;
}
