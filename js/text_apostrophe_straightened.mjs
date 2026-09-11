import { arguments_assert } from "./arguments_assert.mjs";
export function text_apostrophe_straightened(t) {
  "$plain t";
  "One piece of text with every curly apostrophe written as the straight one.";
  "★ TWO SPELLINGS OF ONE WORD ANSWER NO TO EACH OTHER, SILENTLY AND FOR EVERY WORD THAT CARRIES THE MARK. God's typed with a curly apostrophe and God's typed with a straight one are the same word to a reader and two different pieces of text to a set. Measured 2026-09-11 over the Urdu gloss store: eighty-two of the eighty-six words it explained that the bible was thought not to write were nothing but this - possessives and contractions, real words all of them, missing only because one side had straightened the mark and the other had not.";
  "The straight one is what everything comparing already holds, because the readers that cut a bible into words straighten as they go. So this is the step a caller holding text from anywhere else owes before it asks them anything.";
  "It is the mark and nothing else. A quotation mark opening a line is a different character and is left alone, because taking it out is cutting rather than straightening and belongs to whoever is cutting.";
  arguments_assert(arguments, 1);
  let curly = new RegExp("[‘’]", "g");
  let straight = t.replace(curly, "'");
  return straight;
}
