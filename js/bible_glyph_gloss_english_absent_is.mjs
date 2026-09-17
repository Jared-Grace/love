import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { and } from "./and.mjs";
export function bible_glyph_gloss_english_absent_is(gloss) {
  "$plain gloss";
  "the wording is one the interlinear printed under a word. It is text to look at and nothing that runs.";
  "Whether the interlinear gives a word no English anywhere in the verse, so that no mark drawn over the English can be standing for it.";
  "THREE OF THE FOUR FILLERS SAY THIS AND VVV DOES NOT. A row of dots, a dash and a blank all say the English has no word for this one - the phrase around it carries it, or English does not say it at all. Vvv says the opposite: the English is there, only printed in a neighbouring row. So a mark in the verse can be the vvv word's own mark and can never be a dotted word's.";
  "THE DIFFERENCE WAS MEASURED ON JOHN TEN, where both kinds sit on one picture. In verse ten the thief does not come, and not is ou printed vvv while the me of except is dots - so the one no-entry mark is ou's, and dropping vvv as well would have left the verse with no root to pair it with. Only the dots can be dropped there, and dropping them decides the verse the right way.";
  let placeholder = bible_glyph_gloss_placeholder_is(gloss);
  let carried = equal(gloss, "vvv");
  let kept = not(carried);
  let v = and(placeholder, kept);
  return v;
}
